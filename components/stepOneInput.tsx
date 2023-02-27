import { ChangeEvent, FocusEvent } from "react";

const StepOneInput: React.FC<{ id: string, label: string, placeHolder: string, validationMessage: string, value: string, hasError: boolean, changeHandler: (event: ChangeEvent<HTMLInputElement>) => void, blurHandler: (event: FocusEvent<HTMLInputElement>) => void }> = (props) => {

    const inputClasses = props.hasError
        ? 'border-StrawberryRed' : 'border-LightGray';

    return (
        <div className='flex flex-col space-y-2'>
            <div className="flex flex-row justify-between">
                <label htmlFor={props.id} className='font-semibold'>{props.label}</label>
                {props.hasError && <p className="text-StrawberryRed">{props.validationMessage}</p>}
            </div>
            <input
                id={props.id}
                type="text"
                onChange={props.changeHandler}
                onBlur={props.blurHandler}
                value={props.value}
                placeholder={props.placeHolder}
                className={`border rounded-md px-4 py-2 placeholder:font-bold ${inputClasses} hover:border-PurplishBlue`}
            />
        </div>
    )
}

export default StepOneInput;