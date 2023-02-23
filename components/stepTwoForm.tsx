// import iconArcade from "../public/images/icon-arcade.svg"
import { useState } from "react"
import StepTwoFormInput from "./stepTwoFormInput"

const StepTwoForm = () => {
    const [isYearly, setYearly] = useState<boolean>();
    const [plans, setPlans] = useState<{title: string, description: string}[]>(
        [
            {title: 'Arcade', description: '$9/mo'},
            {title: 'Advanced', description: '$12/mo'},
            {title: 'Pro', description: '$15/mo'},
        ]
    )

    const yearlyHandler = () => {
        setYearly((prev) => {
            return !prev
        })
    }

    return (
        <div className="flex flex-col space-y-4">

            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                {
                    plans.map((plan) => (
                        <StepTwoFormInput key={plan.title} title={plan.title} description={plan.description}  />
                    ))
                }
            </div>

            <div className="flex justify-center bg-Alabaster rounded-md py-4 space-x-4">
                <p className={ isYearly ? 'text-CoolGray' : 'text-MarineBlue' }>Monthly</p>
                <button className="flex items-center group w-12 rounded-full bg-MarineBlue" onClick={yearlyHandler}>
                    <div className={`transition w-4 h-4 ml-1 bg-white rounded-full ${ isYearly ? 'translate-x-6' : '' }`}></div>
                </button>
                <p className={ isYearly ? 'text-MarineBlue' : 'text-CoolGray' }>Yearly</p>
            </div>
        </div>
    )
}

export default StepTwoForm