import { Link } from "react-router-dom";
import Button from "../ui/Button";
import classes from "./EventDetails.module.css";

const EventDetails = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.details}>
            <h1>{props.name}</h1>
            <h1>{props.date}</h1>
            </div>
            <div className={classes.buttons}>
            <Button text={'Edit'} link={'edit'}/>
            <Button onclick={props.deleteEvent} text={'Delete'}/>
            <Button link={'..'} text={'Back'}/>
            </div>
        </div>
    )
};

export default EventDetails;