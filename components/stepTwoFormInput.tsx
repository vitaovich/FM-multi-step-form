import Image from "next/image"
import Plan from "@/models/Plan";

const StepTwoFormInput: React.FC<{img: any, id: number, title: string, description: string, isYearly: boolean, selected: boolean, onUpdateSelectedPlan: (id: number) => void}> = (props) => {
    const onClickHandler = () => {
        props.onUpdateSelectedPlan(props.id)
    }
    return (
        <div className="flex-1 cursor-pointer" onClick={onClickHandler}>
            <div className={`flex flex-row md:flex-col border rounded-lg p-4 group-hover:border-PurplishBlue ${props.selected ? 'bg-PurplishBlue/5 border-PurplishBlue }' : ''}`}>
                <Image
                    alt="arcade icon"
                    src={props.img}
                />
                <div className="ml-4 md:ml-0">
                    <h2 className="md:mt-12">{props.title}</h2>
                    <p className="text-CoolGray">{props.description}</p>
                    { props.isYearly && <p className="text-sm">2 months free</p>}
                </div>
            </div>
        </div>
    )
}

export default StepTwoFormInput