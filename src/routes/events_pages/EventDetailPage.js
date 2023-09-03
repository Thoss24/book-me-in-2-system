// third party imports
import { useRouteLoaderData } from "react-router-dom";
import { defer, Await } from "react-router-dom";
import { Suspense } from "react";
// local files - components
import PageHeading from "../../components/ui/PageHeading";
import EventDetails from "../../components/events_elements/EventDetails";
import MainContentWrapper from "../../components/wrapper/MainContentWrapper";
// fetched data
import fetchEvents from "../../utility/fetch-events-data";
import fetchEvent from "../../utility/fetch-event-data";

const EventDetailPage = () => {
  const {event} = useRouteLoaderData('events-details');

  return (
    <MainContentWrapper>
    <Suspense>
      <PageHeading header={"Event Details"} />
      <Await resolve={event}>
        {(event) => <EventDetails name={event.name} date={event.date} />}
      </Await>
    </Suspense>
    </MainContentWrapper>
  );
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.eventId;

  return defer({
    event: fetchEvent(id),
  });

};
