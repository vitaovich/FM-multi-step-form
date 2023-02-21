import React, { ChangeEvent, FocusEvent,ChangeEventHandler, FocusEventHandler, useRef, useState } from "react";

const StepForm: React.FC<{ title: string, description: string, addPersonalInfoHandler: (name: string) => void }> = (props) => {
    // const nameTextInputRef = useRef<HTMLInputElement>(null);
    const [enteredName, setEnteredName] = useState<string>('');
    const [enteredNameIsTouched, setEnteredNameIsTouched] = useState<boolean>(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

    const nameInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredName(event.currentTarget.value)
    }

    const nameInputBlurHandler = (_event: FocusEvent<HTMLInputElement>) => {
        setEnteredNameIsTouched(true)
    }

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        setEnteredNameIsTouched(true)

        if (!enteredNameIsValid) {
            return
        }

        console.log(enteredName)

        setEnteredNameIsTouched(false)
    }


    const nameInputClasses = nameInputIsInvalid
        ? 'border-StrawberryRed' : 'border-LightGray';

    return (
        <>
            <h1 className='text-4xl'>{props.title}</h1>
            <p className='text-CoolGray text-lg'>{props.description}</p>

            <form onSubmit={submitHandler}>
                <div className='flex flex-col space-y-2'>
                    <div className="flex flex-row justify-between">
                        <label htmlFor='name' className=''>Name</label>
                        {nameInputIsInvalid && <p className="text-StrawberryRed">This field is required</p>}
                    </div>
                    <input
                        id='name'
                        type="text"
                        // ref={nameTextInputRef}
                        onChange={nameInputChangeHandler}
                        onBlur={nameInputBlurHandler}
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