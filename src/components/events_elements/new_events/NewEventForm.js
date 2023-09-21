import { Form } from "react-router-dom";
import useFormInput from "../../../hooks/use-form-input";
import useValidateForm from "../../../hooks/use-validate-form";
import { Link } from "react-router-dom";
import classes from "./NewEventForm.module.css";
import { useRef } from "react";
import { eventsActions } from "../../../store/events_slice";
import { useDispatch } from "react-redux";

const NewEventForm = () => {

    const name = useRef();
    const date = useRef();

    const dispatch = useDispatch();

    const  { nameIsValid, dateIsValid } = useValidateForm();

    const {
      inputValue: nameInputValue,
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
      const event = {
        name: name.current.value,
        date: date.current.value
      };
      dispatch(eventsActions.addEvent(event))
      nameHandleReset()
      dateHandleReset()
    };

  const nameInputIsValid = nameInputInvalid ? classes.invalid : classes.valid;
  const dateInputIsValid = dateInputInvalid ? classes.invalid : classes.valid;

  let formIsValid = false;

  if (!nameInputInvalid && nameInputValue.length > 0) {
      formIsValid = true
  };

  return (
    <Form method="POST" onSubmit={submitFormHandler} className={classes['new-event-form']}>
      <div className={classes['input-section']}>
        <label htmlFor="">Name</label>
        <input className={nameInputIsValid} type="text" name="name" onChange={nameChangeInput} onBlur={nameIsTouched} ref={name}/>
      </div>
      <div className={classes['input-section']}>
        <label htmlFor="">Date</label>
        <input className={dateInputIsValid} type="date" name="date" onChange={dateChangeInput} onBlur={dateIsTouched} ref={date}/>
      </div>
      <div className={classes.buttons}>
        <button type="submit" disabled={!formIsValid}>Add</button>
        <button type="none" text={'Cancel'}><Link to={'/events'}>Cancel</Link></button>
      </div>
    </Form>
  );
};

export default NewEventForm;
