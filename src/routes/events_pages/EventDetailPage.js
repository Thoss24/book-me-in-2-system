// third party imports
import { defer, Await, useSubmit, redirect, useRouteLoaderData } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// local files - components
import PageHeading from "../../components/ui/PageHeading";
import EventDetails from "../../components/events_elements/event_elements/EventDetails";
import MainContentWrapper from "../../components/wrapper/MainContentWrapper";
import getBookedEventsData from './../../store/booked_events_actions';
import { addEventData } from "./../../store/booked_events_actions";
// fetched data
import fetchEvent from "../../utility/fetch-event-data";

const EventDetailPage = () => {
  const { event } = useRouteLoaderData("events-details");

  const bookedEvents = useSelector(state => state.bookedEvents.bookedEvents);
  console.log(bookedEvents)

  const submit = useSubmit();

  const deleteEventHandler = () => {
    const proceed = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (proceed) {
      submit(null, { method: "delete" });
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getBookedEventsData)
  }, [dispatch])
  
  useEffect(() => {
    addEventData(bookedEvents)
  }, [bookedEvents])

  return (
    <MainContentWrapper>
      <Suspense>
        <PageHeading header={"Event Details"} />
        <Await resolve={event}>
          {(event) => (
            <EventDetails
              deleteEvent={deleteEventHandler}
              name={event.name}
              date={event.date}
            />
          )}
        </Await>
      </Suspense>
    </MainContentWrapper>
  );
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.eventId;

  console.log(id);

  return defer({
    event: await fetchEvent(id),
  });
};

export const action = async ({ request, params }) => {
  const id = params.eventId;

  console.log(request);

  const response = await fetch(
    `https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/events/${id}.json`,
    {
      method: request.method,
    }
  );

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  return redirect("/events");
};
