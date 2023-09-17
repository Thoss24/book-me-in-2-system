import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getBookedEventsData from "../../store/booked_events_actions";
import BookedEventsList from "../../components/events_elements/booked_event_elements/BookedEventsList";
import { useSelector } from "react-redux/es/hooks/useSelector";

const BookedEventsHomePage = () => {

    const bookedEvents = useSelector(state => state.bookedEvents.bookedEvents);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBookedEventsData)
    }, [dispatch])

    console.log(bookedEvents)

    return (
        <BookedEventsList events={bookedEvents}/>
    )
};

export default BookedEventsHomePage

export const loader = ({request, params}) => {
    
};

export const action = ({request, params}) => {

};