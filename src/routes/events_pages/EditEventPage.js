import EditEventForm from "../../components/events_elements/EditEventForm";
import { useRouteLoaderData } from "react-router-dom";

const EditEventPage = () => {

    const {event} = useRouteLoaderData('events-details');

    console.log(event)

  return <div>
    <h1></h1>
    <EditEventForm />
  </div>;
};

export default EditEventPage;
