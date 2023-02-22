import useInput from "@/hooks/use-input";
import React, { ChangeEvent, FocusEvent, ChangeEventHandler, FocusEventHandler, useRef, useState } from "react";
import StepFormInput from "./stepFormInput";

const StepOneForm: React.FC<{ addPersonalInfoHandler: (name: string, email: string, phone: string) => void }> = (props) => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    }
        = useInput(value => value.trim() !== '');
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    }
        = useInput(value => value.trim() !== '');
    const {
        value: enteredPhoneNum,
        isValid: enteredPhoneNumIsValid,
        hasError: phoneNumInputHasError,
        valueChangeHandler: phoneNumChangedHandler,
        inputBlurHandler: phoneNumBlurHandler,
        reset: resetPhoneNumInput
    }
        = useInput(value => value.trim() !== '');

    let formIsValid = false

    if (enteredNameIsValid && enteredEmailIsValid && enteredPhoneNumIsValid) {
        formIsValid = true
    }

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        if (!formIsValid) {
            return
        }
        props.addPersonalInfoHandler(enteredName, enteredEmail, enteredPhoneNum)

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
            <div className="flex justify-end"><button className="px-5 py-3 rounded-md text-white bg-MarineBlue">Next Step</button></div>
        </form>
    )
}
export default StepOneForm