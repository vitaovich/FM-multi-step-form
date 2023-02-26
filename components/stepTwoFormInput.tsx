import iconArcade from "../public/images/icon-arcade.svg"
import Image from "next/image"
import Plan from "@/models/Plan";

const StepTwoFormInput: React.FC<{plan: Plan, title: string, description: string, isYearly: boolean, selected: boolean, onClickHandler: (plan: Plan) => void}> = (props) => {
    return (
        <div className="flex-1 group" onClick={() => props.onClickHandler(props.plan)}>
            <div className={`flex flex-row md:flex-col border rounded-lg p-4 group-hover:border-PurplishBlue ${props.selected ? 'bg-PurplishBlue/5 border-PurplishBlue }' : ''}`}>
                <Image
                    alt="arcade icon"
                    src={iconArcade}
                />
                <div className="ml-4 md:ml-0">
                    <h2 className="font-bold md:mt-12">{props.title}</h2>
                    <p className="text-CoolGray">{props.description}</p>
                    { props.isYearly && <p>2 months free</p>}
                </div>
            </div>
        </div>
    )
}

export default StepTwoFormInput