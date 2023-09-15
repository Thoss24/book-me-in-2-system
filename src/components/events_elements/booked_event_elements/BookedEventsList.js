import BookedEventListItem from "./BookedEventListItem";
import classes from "./BookedEventsList.module.css";

const BookedEventsList = (props) => {

  const extractAndStoreBookedEvents = () => {
    let result = [];
    const events = props.events;
    for (const event in events) {
      result.push(events[event]);
    }
    return result
  };
  extractAndStoreBookedEvents();

  return (
    <main>
      <div className={classes['booked-events-list']}>
        {extractAndStoreBookedEvents().map((event) => (
          <BookedEventListItem
            name={event.name}
            date={event.date}
            key={extractAndStoreBookedEvents().indexOf(event)}
            id={event}
          />
        ))}
      </div>
    </main>
  );
};

export default BookedEventsList;
