// import iconArcade from "../public/images/icon-arcade.svg"
import Plan from "@/models/Plan";
import { useState } from "react"
import StepTwoFormInput from "./stepTwoFormInput"

const StepTwoForm: React.FC<{ yearly: boolean, yearlyHandler: (yearly: boolean) => void }> = (props) => {
    const [isYearly, setYearly] = useState<boolean>(props.yearly);
    const [plans, setPlans] = useState<Plan[]>(
        [
            new Plan('Arcade', 9),
            new Plan('Advanced', 12),
            new Plan('Pro', 15),
        ]
    )

    const formattedPlans = plans.map((plan) => (
        { plan: plan, description: `$${isYearly ? plan.price * 10 : plan.price}/${isYearly ? 'yr' : 'mo'}` }
    )
    )

    const onClickYearlyHandler = () => {
        console.log('clicked yearly')
        setYearly((prev) => (!prev))
        props.yearlyHandler(isYearly)
    }

    return (
        <div className="flex flex-col space-y-4">

            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                {
                    formattedPlans.map((plan) => (
                        <StepTwoFormInput key={plan.plan.name} title={plan.plan.name} description={plan.description} isYearly={isYearly} />
                    ))
                }
            </div>

            <div className="flex justify-center bg-Alabaster rounded-md py-4 space-x-4">
                <p className={isYearly ? 'text-CoolGray' : 'text-MarineBlue'}>Monthly</p>
                <button className="flex items-center group w-12 rounded-full bg-MarineBlue" onClick={onClickYearlyHandler}>
                    <div className={`transition w-4 h-4 ml-1 bg-white rounded-full ${isYearly ? 'translate-x-6' : ''}`}></div>
                </button>
                <p className={isYearly ? 'text-MarineBlue' : 'text-CoolGray'}>Yearly</p>
            </div>
        </div>
    )
}

export default StepTwoForm