import { Form, Link } from "react-router-dom";
import useFormInput from "../../../hooks/use-form-input";
import useValidateForm from "../../../hooks/use-validate-form";
import classes from "./NewEventForm.module.css";

const NewEventForm = () => {

    const  { nameIsValid, dateIsValid } = useValidateForm();

    const {
      inputInvalid: nameInputInvalid,
      handleChangeInput: nameChangeInput,
      handleIsTouched: nameIsTouched,
      handleReset: nameHandleReset,
    } = useFormInput(nameIsValid);

    const {
      inputInvalid: dateInputInvalid,
      handleChangeInput: dateChangeInput,
      handleIsTouched: dateIsTouched,
      handleReset: dateHandleReset,
    } = useFormInput(dateIsValid)

    const submitFormHandler = () => {
      nameHandleReset()
      dateHandleReset()
    };

  const formIsValid = !nameInputInvalid && !dateInputInvalid;
  const nameInputIsValid = nameInputInvalid ? classes.invalid : classes.valid;
  const dateInputIsValid = dateInputInvalid ? classes.invalid : classes.valid;

  return (
    <Form method="POST" onSubmit={submitFormHandler}>
      <div>
        <label htmlFor="">Name</label>
        <input className={nameInputIsValid} type="text" name="name" onChange={nameChangeInput} onBlur={nameIsTouched}/>
      </div>
      <div>
        <label htmlFor="">Date</label>
        <input className={dateInputIsValid} type="date" name="date" onChange={dateChangeInput} onBlur={dateIsTouched}/>
      </div>
      <div>
        <button type="submit" disabled={!formIsValid}>Add</button>
        <button type="none"><Link to={'..'} relative="path">Cancel</Link></button>
      </div>
    </Form>
  );
};

export default NewEventForm;
