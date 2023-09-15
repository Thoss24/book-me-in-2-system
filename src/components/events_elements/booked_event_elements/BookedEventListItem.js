import classes from "./BookedEventListItem.module.css";

const BookedEventListItem = (props) => {
    return (
        <div className={classes['list-item']}>
            <h1>{props.name}</h1>
            <h1>{props.date}</h1>
        </div>
    )
};

export default BookedEventListItem;