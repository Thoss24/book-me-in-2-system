import { useSelector } from "react-redux/es/hooks/useSelector";

const CalenderPage = () => {

    const bookedEvents = useSelector(state => state.bookedEvents.bookedEvents)

    const extractAndStoreBookedEventDates = () => {
        let result = [];
        const events = bookedEvents;
        for (const event in events) {
          result.push(events[event].date);
        }
        console.log(result)
      };
      extractAndStoreBookedEventDates();

    return (
        <div>
            
        </div>
    )
};

export default CalenderPage;