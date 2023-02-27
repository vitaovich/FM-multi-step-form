import iconArcade from "../public/images/icon-arcade.svg"
import iconAdvanced from "../public/images/icon-advanced.svg"
import iconPro from "../public/images/icon-pro.svg"
import Plan from "@/models/Plan";
import { RefObject, useState } from "react"
import StepTwoFormInput from "./stepTwoFormInput"

const StepTwoForm: React.FC<{ selectedPlan: Plan, buttonRef: RefObject<HTMLButtonElement>, addPlanHandler: (plan: Plan) => void, yearly: boolean, yearlyHandler: (yearly: boolean) => void, formValidHandler: (isValid: boolean) => void }> = (props) => {
    const [isYearly, setYearly] = useState<boolean>(props.yearly);
    const [selectedPlan, setSelectedPlan] = useState<Plan>(props.selectedPlan)
    const [plans, setPlans] = useState<Plan[]>(
        [
            new Plan(1, 'Arcade', 9, iconArcade),
            new Plan(2, 'Advanced', 12, iconAdvanced),
            new Plan(3, 'Pro', 15, iconPro),
        ]
    )

    const formatPrice = (price: number, isYearly: boolean) => {
        return `$${isYearly ? price * 10 : price}/${isYearly ? 'yr' : 'mo'}`
    }

    const onClickYearlyHandler = () => {
        setYearly((prev) => (!prev))
    }

    const onClickPlanHandler = (id: number) => {
        let selectedPlan = plans.find(plan => plan.id === id)
        if (selectedPlan) {
            setSelectedPlan(selectedPlan)
        }
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
                    plans.map((plan) => (
                        <StepTwoFormInput
                            img={plan.img}
                            key={plan.name}
                            id={plan.id}
                            title={plan.name}
                            description={formatPrice(plan.price, isYearly)}
                            isYearly={isYearly}
                            selected={plan.name === selectedPlan.name}
                            onUpdateSelectedPlan={onClickPlanHandler}
                        />
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