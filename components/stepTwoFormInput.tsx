import iconArcade from "../public/images/icon-arcade.svg"
import Image from "next/image"

const StepTwoFormInput: React.FC<{title: string, description: string}> = (props) => {
    return (
        <div className="flex flex-row md:flex-col grow border rounded-lg p-4">
            <Image
                alt="arcade icon"
                src={iconArcade}
            />
            <div className="ml-4 md:ml-0">
                <h2 className="font-bold md:mt-12">{props.title}</h2>
                <p className="text-CoolGray">{props.description}</p>
            </div>
        </div>
    )
}

export default StepTwoFormInput