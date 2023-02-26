import iconArcade from "../public/images/icon-arcade.svg"
import iconAdvanced from "../public/images/icon-advanced.svg"
import iconPro from "../public/images/icon-pro.svg"
import Plan from "@/models/Plan";
import { RefObject, useState } from "react"
import StepTwoFormInput from "./stepTwoFormInput"

const StepTwoForm: React.FC<{ selectedPlan: Plan, buttonRef: RefObject<HTMLButtonElement>, addPlanHandler: (plan: Plan) => void, yearly: boolean, yearlyHandler: (yearly: boolean) => void, formValidHandler: (isValid: boolean) => void }> = (props) => {
    const [isYearly, setYearly] = useState<boolean>(props.yearly);
    const [plans, setPlans] = useState<Plan[]>(
        [
            new Plan('Arcade', 9, iconArcade),
            new Plan('Advanced', 12, iconAdvanced),
            new Plan('Pro', 15, iconPro),
        ]
    )
    const formattedPlans = plans.map((plan) =>
    (
        { plan: plan, description: `$${isYearly ? plan.price * 10 : plan.price}/${isYearly ? 'yr' : 'mo'}` }
    )
    )
    const [selectedPlan, setSelectedPlan] = useState<Plan>(props.selectedPlan)

    const onClickYearlyHandler = () => {
        setYearly((prev) => (!prev))
    }

    const onClickPlanHandler = (plan: Plan) => {
        setSelectedPlan(plan)
    }

    const onSubmit = () => {
        props.formValidHandler(true)
        props.yearlyHandler(isYearly)
        props.addPlanHandler(selectedPlan)
    }

    return (
        <div className="flex flex-col space-y-4">

            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                {
                    formattedPlans.map((formattedPlan) => (
                        <StepTwoFormInput img={formattedPlan.plan.img} key={formattedPlan.plan.name} plan={formattedPlan.plan} title={formattedPlan.plan.name} description={formattedPlan.description} isYearly={isYearly} selected={formattedPlan.plan.name === selectedPlan.name} onClickHandler={onClickPlanHandler} />
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
            <button ref={props.buttonRef} onClick={onSubmit} className="hidden">Next Step</button>
        </div>
    )
}

export default StepTwoForm