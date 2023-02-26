import useInput from "@/hooks/use-input";
import { RefObject } from "react";
import StepFormInput from "./stepFormInput";

type Type = { 
    name: string, 
    email: string, 
    phoneNum: string, 
    addPersonalInfoHandler: (name: string, email: string, phone: string) => void 
    formValidHandler: (isValid: boolean) => void
    buttonRef: RefObject<HTMLButtonElement>
}

const StepOneForm: React.FC<Type> = (props) => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    }
        = useInput(props.name, value => value.trim() !== '');
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    }
        = useInput(props.email, value => value.trim() !== '');
    const {
        value: enteredPhoneNum,
        isValid: enteredPhoneNumIsValid,
        hasError: phoneNumInputHasError,
        valueChangeHandler: phoneNumChangedHandler,
        inputBlurHandler: phoneNumBlurHandler,
        reset: resetPhoneNumInput
    }
        = useInput(props.phoneNum, value => value.trim() !== '');

    let formIsValid = false

    if (enteredNameIsValid && enteredEmailIsValid && enteredPhoneNumIsValid) {
        formIsValid = true
    }

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (!formIsValid) {
            props.formValidHandler(false)
            return
        }
        props.addPersonalInfoHandler(enteredName, enteredEmail, enteredPhoneNum)
        props.formValidHandler(true)
        // resetNameInput()
        // resetEmailInput()
        // resetPhoneNumInput()
    }
    return (
        <form onSubmit={submitHandler} className='space-y-4'>
            <StepFormInput
                label={"Name"}
                validationMessage={"This field is required."}
                value={enteredName}
                hasError={nameInputHasError}
                changeHandler={nameChangedHandler}
                blurHandler={nameBlurHandler}
                id={"name"}
                placeHolder={"e.g. Stephen King"}
            />
            <StepFormInput
                label={"Email Address"}
                validationMessage={"This field is required."}
                value={enteredEmail}
                hasError={emailInputHasError}
                changeHandler={emailChangedHandler}
                blurHandler={emailBlurHandler}
                id={"email"}
                placeHolder={"e.g. stephenking@lorem.com"}
            />
            <StepFormInput
                label={"Phone Number"}
                validationMessage={"This field is required."}
                value={enteredPhoneNum}
                hasError={phoneNumInputHasError}
                changeHandler={phoneNumChangedHandler}
                blurHandler={phoneNumBlurHandler}
                id={"phone"}
                placeHolder={"e.g. +1 234 567 890"}
            />
            <button ref={props.buttonRef} className="hidden">Next Step</button>
        </form>
    )
}
export default StepOneForm