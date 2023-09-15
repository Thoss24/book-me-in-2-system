import { Form } from "react-router-dom";
import { Link } from "react-router-dom";
import useFormInput from "../../../hooks/use-form-input";
import useValidateForm from "../../../hooks/use-validate-form";
import classes from "./EditEventForm.module.css";

const EditEventForm = (props) => {

    const { nameIsValid, dateIsValid } = useValidateForm()

    const {
        inputInvalid: nameInputInvalid,
        handleChangeInput: handleNameChange,
        handleIsTouched: handleNameIsTouched,
        handleReset: handleNameReset,
    } = useFormInput(nameIsValid);

    const {
        inputInvalid: dateInputInvalid,
        handleChangeInput: handleDateChange,
        handleIsTouched: handleDateIsTouched,
        handleReset: handleDateReset,
    } = useFormInput(dateIsValid);

    const submitFormHandler = () => {
        handleNameReset()
        handleDateReset()
    };

    const formIsValid = !nameInputInvalid && !dateInputInvalid;
    const nameInputIsValid = nameInputInvalid ? classes.invalid : classes.valid;
    const dateInputIsValid = dateInputInvalid ? classes.invalid : classes.valid;

    return (
        <Form method="PATCH" onSubmit={submitFormHandler}>
            <h1>Edit Event Page</h1>
            <div>
                <label htmlFor=""></label>
                <input className={nameInputIsValid} type="text" name="name" onChange={handleNameChange} onBlur={handleNameIsTouched} defaultValue={props.name}/>
            </div>
            <div>
                <label htmlFor=""></label>
                <input className={dateInputIsValid} type="date" name="date" onChange={handleDateChange} onBlur={handleDateIsTouched} defaultValue={props.date}/>
            </div>
            <button type="submit" disabled={!formIsValid}>Done</button>
            <button type="none"><Link to={'..'}>Cancel</Link></button>
        </Form>
    )
};

export default EditEventForm