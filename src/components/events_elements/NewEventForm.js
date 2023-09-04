import { Form } from "react-router-dom";
import useFormInput from "../../hooks/use-form-input";
import useValidateForm from "../../hooks/use-validate-form";

const NewEventForm = () => {

    const  { nameIsValid, dateIsValid } = useValidateForm();

    const {
        inputValue: nameInputValue,
        inputValid: nameInputValid,
        inputInvalid: nameInputInvalid,
        handleChangeInput: nameChangeInput,
        handleIsTouched: nameIsTouched,
        handleReset: nameHandleReset,
    } = useFormInput(nameIsValid);

    const {
        inputValue: dateInputValue,
        inputValid: dateInputValid,
        inputInvalid: dateInputInvalid,
        handleChangeInput: dateChangeInput,
        handleIsTouched: dateIsTouched,
        handleReset: dateHandleReset,
    } = useFormInput(dateIsValid)

  return (
    <Form method="POST">
      <div>
        <label htmlFor="">Name</label>
        <input type="text" name="name" defaultValue={nameInputValue}/>
      </div>
      <div>
        <label htmlFor="">Date</label>
        <input type="date" name="date" defaultValue={dateInputValue}/>
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </Form>
  );
};

export default NewEventForm;
