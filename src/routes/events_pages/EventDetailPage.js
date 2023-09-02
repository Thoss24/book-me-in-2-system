// third party imports
import { useLoaderData } from "react-router-dom";
import { defer, Await } from "react-router-dom";
import { Suspense } from "react";
import { json } from "react-router-dom";
// local files - components
import PageHeading from "../../components/ui/PageHeading";
import EventDetails from "../../components/event_details/EventDetails";
import MainContentWrapper from "../../components/wrapper/MainContentWrapper";
// fetched data
import fetchEvents from "../../utility/fetch-events-data";
import fetchEvent from "../../utility/fetch-event-data";

const EventDetailPage = () => {
  const eventData = useLoaderData();

  console.log(eventData);

  return (
    <div>
        <h1>Event Details</h1>
        <h2>{eventData.name}</h2>
    </div>
    // <MainContentWrapper>
    // <Suspense>
    //   <PageHeading header={"Event Details"} />
    //   <Await resolve={event}>
    //     {(event) => <EventDetails name={event.name} date={event.date} />}
    //   </Await>
    // </Suspense>
    // </MainContentWrapper>
  );
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.eventId;

  const response = await fetch(`https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/events/${id}.json`);

    if (!response.ok) {
        throw json({message: 'Could not load event'}, {status: 500})
    } else {
        const eventData = await response.json()
        console.log(eventData)
        return eventData
    }

//   return defer({
//     event: fetchEvent(id),
//   });
};
