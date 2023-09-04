import { Form } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const EditEventForm = () => {

    return (
        <Form method="PATCH">
            <h1>Edit Event Page</h1>
            <div>
                <label htmlFor=""></label>
                <input type="text" name="name"/>
            </div>
            <div>
                <label htmlFor=""></label>
                <input type="date" name="date"/>
            </div>
            <button type="submit">Done</button>
            <button type="none"><Link to={'..'}>Cancel</Link></button>
        </Form>
    )
};

export default EditEventForm