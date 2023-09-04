import { Link } from "react-router-dom";
import classes from './EventsNavigation.module.css';

const EventsNavigation = () => {
    return (
        <nav className={classes['events-nav']}>
            <ul>
                <li><Link to={'/events'}>Events</Link></li>
                <li><Link to={'new-event'}>New Event</Link></li>
            </ul>
        </nav>
    )
};

export default EventsNavigation