import BookedEventListItem from "./BookedEventListItem";

const BookedEventsList = (props) => {

  const extractAndStoreBookedEvents = () => {
    let result = [];
    const events = props.events[0];
    for (const event in events) {
      result.push(events[event]);
    }
    return result
  };
  extractAndStoreBookedEvents();

  return (
    <main>
      <div>
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
