import { Link } from "react-router-dom";

const BookedEventsNavigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to={'/booked-events'}>Booked Events</Link></li>
                <li><Link to={'calender'}>Calender</Link></li>
            </ul>
        </nav>
    )
};

export default BookedEventsNavigation;