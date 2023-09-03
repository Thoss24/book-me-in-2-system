import { Outlet } from "react-router-dom";
import EventsNavigation from "../../components/navigation/EventsNavigation";
import classes from './EventsRoot.module.css';

const EventsRoot = () => {
    return (
        <div>
        <EventsNavigation />
        <main className={classes.content}>
          <Outlet />
        </main>
      </div>
    )
};

export default EventsRoot