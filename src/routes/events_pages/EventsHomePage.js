import fetchEvents from "../../utility/fetch-events-data";
import { useLoaderData, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import EventsList from "../../components/events_list/EventsList";
import Loading from "../../components/ui/Loading";
import MainContentWrapper from "../../components/wrapper/MainContentWrapper";
import PageHeading from "../../components/ui/PageHeading";
import getBookedEventsData from "../../store/booked_events_actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const EventsHomePage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBookedEventsData)
    }, [dispatch])

    const { events } = useLoaderData();

    return (
        <MainContentWrapper>
       <Suspense fallback={<Loading message={'Loading....'}/>}>
        <PageHeading header={'Events Home Page'}/>
        <Await resolve={events}>
            {(events) => <EventsList events={[events]}/>}
        </Await>
       </Suspense>
       </MainContentWrapper>
    )
};

export default EventsHomePage

 export const loader = async () => {
    return defer({
        events: fetchEvents()
    });
};