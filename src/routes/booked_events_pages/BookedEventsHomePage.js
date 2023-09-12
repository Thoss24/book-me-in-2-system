import { useDispatch } from "react-redux";
import { useEffect } from "react";
import getBookedEventsData from './../../store/booked_events_actions';
import BookedEventsList from "../../components/events_elements/booked_event_elements/BookedEventsList";
import { useSelector } from "react-redux/es/hooks/useSelector";

const BookedEventsHomePage = () => {

    const bookedEvents = useSelector(state => state.bookedEvents.bookedEvents);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBookedEventsData)
    }, [dispatch])

    return (
        <BookedEventsList events={bookedEvents}/>
    )
};

export default BookedEventsHomePage