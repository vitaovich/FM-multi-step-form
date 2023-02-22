import iconArcade from "../public/images/icon-arcade.svg"
import Image from "next/image"

const StepTwoForm = () => {
    return (
        <div className="flex flex-col space-y-4">

            <div className="flex flex-col md:flex-row">
                <div className="flex flex-row md:flex-col grow border rounded-lg p-4">
                    <Image 
                        alt="arcade icon"
                        src={iconArcade}
                    />
                    <div className="ml-4 md:ml-0">
                        <h2 className="font-bold md:mt-12">Arcade</h2>
                        <p className="text-CoolGray">$9/mo</p>
                    </div>
                </div>
                {/* Advanced
                $12/mo
                Pro
                $15/mo */}
            </div>

            <div className="flex justify-center bg-LightGray">
                Monthly
                Yearly
            </div>
        </div>
    )
}

export default StepTwoForm