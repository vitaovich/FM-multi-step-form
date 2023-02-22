import useInput from "@/hooks/use-input";
import React, { ChangeEvent, FocusEvent, ChangeEventHandler, FocusEventHandler, useRef, useState } from "react";

const StepForm: React.FC<{ title: string, description: string, addPersonalInfoHandler: (name: string) => void }> = (props) => {
    // const nameTextInputRef = useRef<HTMLInputElement>(null);
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    }
    = useInput(value => value.trim() !== '');

    let formIsValid = false

    if (enteredNameIsValid) {
        formIsValid = true
    }

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        if (!formIsValid) {
            return
        }
        console.log(enteredName)

        resetNameInput()
    }


    const nameInputClasses = nameInputHasError
        ? 'border-StrawberryRed' : 'border-LightGray';

    return (
        <>
            <h1 className='text-4xl'>{props.title}</h1>
            <p className='text-CoolGray text-lg'>{props.description}</p>

            <form onSubmit={submitHandler}>
                <div className='flex flex-col space-y-2'>
                    <div className="flex flex-row justify-between">
                        <label htmlFor='name' className=''>Name</label>
                        {nameInputHasError && <p className="text-StrawberryRed">This field is required</p>}
                    </div>
                    <input
                        id='name'
                        type="text"
                        // ref={nameTextInputRef}
                        onChange={nameChangedHandler}
                        onBlur={nameBlurHandler}
                        value={enteredName}
                        placeholder="e.g. Stephen King"
                        className={`border  rounded-md px-4 py-2 placeholder:font-bold ${nameInputClasses}`}
                    />
                </div>
                <button>submit</button>
            </form>
        </>
    )
}
export default StepForm