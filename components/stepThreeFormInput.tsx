import { useState } from "react"

const StepThreeFormInput: React.FC<{ id:number, name: string, description: string, price: string, checked: boolean, onCheckHandler: (id: number, isChecked: boolean) => void}> = (props) => {
    const [isChecked, setIsChecked] = useState<boolean>(props.checked)

    const onChangeHandler = () => {
        props.onCheckHandler(props.id, !isChecked)
        setIsChecked(!isChecked)
    }
    
    return (
        <label className={`flex flex-row items-center cursor-pointer border rounded-lg space-x-4 p-4 hover:border-PurplishBlue ${isChecked ? 'bg-PurplishBlue/5 border-PurplishBlue' : ''}`}>
            <input
                type="checkbox"
                name="check"
                checked={isChecked}
                onChange={onChangeHandler}
                className="accent-PurplishBlue w-6 h-6"
            />
            <div className='flex flex-auto flex-col' >
                <h2>{props.name}</h2>
                <p className="text-CoolGray">{props.description}</p>
            </div>
            <p className="text-PurplishBlue">{props.price}</p>
        </label>
    )
}

export default StepThreeFormInput