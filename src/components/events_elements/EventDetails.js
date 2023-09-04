import { Link } from "react-router-dom";

const EventDetails = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.date}</h1>
            <button><Link to={'edit'}>Edit</Link></button>
            <button><Link>Delete</Link></button>
            <button><Link to={'..'}>Back</Link></button>
        </div>
    )
};

export default EventDetails;