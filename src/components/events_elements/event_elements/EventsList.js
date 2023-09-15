import EventListItem from "./EventsListItem";
import classes from './EventsList.module.css'

const EventsList = (props) => {

    const events = () => {
       const events = props.events.map(event => event).reduce ((a, b) => {return a.name})
       
       const finalArr = []

        for (const i in events) {
            
            finalArr.push({
                name: events[i].name,
                date: events[i].date,
                id: i
            })
        };
    console.log(finalArr)
    return finalArr
    }
    
    return (
        <div className={classes.list}>
            {events().map(event => (
                <EventListItem 
                key={event.id}
                id={event.id}
                name={event.name}
                date={event.date}
                />
            ))}
        </div>
    )
};

export default EventsList