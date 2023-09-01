import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css';

const MainNavigation = () => {

    const isActive = ({active}) => active ? classes.active : undefined;

    return (
        <nav className={classes['main-nav']}>
            <ul>
                <li className={isActive}><NavLink to={'/'}>Home</NavLink></li>
                <li className={isActive}><NavLink to={'events'}>Events</NavLink></li>
                <li className={isActive}><NavLink to={'booked-events'}>Booked Events</NavLink></li>
            </ul>
        </nav>
    )
};

export default MainNavigation