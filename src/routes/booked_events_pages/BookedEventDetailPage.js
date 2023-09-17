import fetchBookedEvent from "../../utility/fetch-booked-event-data";
import { defer, Await, useSubmit, redirect, useRouteLoaderData } from "react-router-dom";
import PageHeading from "../../components/ui/PageHeading";
import { Suspense } from "react";
import BookedEventDetails from "../../components/events_elements/booked_event_elements/BookedEventDetails";

const BookedEventDetailPage = () => {

    const { bookedEvent } = useRouteLoaderData('booked-event-details');

    console.log(bookedEvent)

    return (
        <Suspense>
        <PageHeading header={"Booked Event Details"} />
        <Await resolve={bookedEvent}>
          {(event) => (
            <BookedEventDetails
              name={event.name}
              date={event.date}
            />
          )}
        </Await>
      </Suspense>
    )
};

export default BookedEventDetailPage;

export const loader = async ({request, params}) => {
    const id = params.bookedEventId;

    console.log(id);
  
    return defer({
      bookedEvent: await fetchBookedEvent(id),      
    });
};