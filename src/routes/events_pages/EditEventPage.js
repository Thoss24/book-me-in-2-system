import EditEventForm from "../../components/events_elements/EditEventForm";
import { useRouteLoaderData } from "react-router-dom";

const EditEventPage = () => {

    const { event } = useRouteLoaderData('events-details');

    const name = event.name;

    const date = event.date;

  return <div>
    <h1></h1>
    <EditEventForm name={name} date={date}/>
  </div>;
};

export default EditEventPage;
