import { ChangeEvent, FocusEvent, useState } from "react";

const useInput = (input: string, validateValue: (value:string) => boolean) => {
    const [enteredValue, setEnteredValue] = useState<string>(input);
    const [isTouched, setIsTouched] = useState<boolean>(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredValue(event.currentTarget.value)
    }

    const inputBlurHandler = (_event: FocusEvent<HTMLInputElement>) => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        value: enteredValue, isValid: valueIsValid, hasError, valueChangeHandler, inputBlurHandler, reset
    }
}

export default useInput