import BookedEventListItem from "./BookedEventListItem";

const BookedEventsList = (props) => {

    const test = () => {
        for (const i in props.events) {
            console.log(props.events)
        }
    }
    test()

    return (
        <main>
            <div>
                {props.events.map(event => (
                    <BookedEventListItem 
                    name={event.name}
                    date={event.date}
                    key={event}
                    id={event}
                    />
                ))}
            </div>
        </main>
    )
};

export default BookedEventsList