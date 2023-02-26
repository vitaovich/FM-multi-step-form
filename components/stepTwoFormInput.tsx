import iconArcade from "../public/images/icon-arcade.svg"
import Image from "next/image"
import Plan from "@/models/Plan";

const StepTwoFormInput: React.FC<{plan: Plan, title: string, description: string, isYearly: boolean, onClickHandler: (plan: Plan) => void}> = (props) => {
    return (
        <div className="flex flex-row md:flex-col grow group" onClick={() => props.onClickHandler(props.plan)}>
            <div className="border rounded-lg p-4 group-hover:border-PurplishBlue group-hover:bg-PurplishBlue/5">
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