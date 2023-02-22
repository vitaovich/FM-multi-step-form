// import iconArcade from "../public/images/icon-arcade.svg"
import { useState } from "react"
import StepTwoFormInput from "./stepTwoFormInput"

const StepTwoForm = () => {
    const [plans, setPlans] = useState<{title: string, description: string}[]>(
        [
            {title: 'Arcade', description: '$9/mo'},
            {title: 'Advanced', description: '$12/mo'},
            {title: 'Pro', description: '$15/mo'},
        ]
    )

    return (
        <div className="flex flex-col space-y-4">

            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                {
                    plans.map((plan) => (
                        <StepTwoFormInput key={plan.title} title={plan.title} description={plan.description}  />
                    ))
                }
            </div>

            <div className="flex justify-center bg-LightGray rounded-md py-4">
                Monthly
                Yearly
            </div>
        </div>
    )
}

export default StepTwoForm