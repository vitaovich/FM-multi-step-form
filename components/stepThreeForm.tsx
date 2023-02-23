// import iconArcade from "../public/images/icon-arcade.svg"
import { useState } from "react"

const StepThreeForm = () => {
    const [addons, setAddons] = useState<{ title: string, description: string, price: string }[]>(
        [
            { title: 'Online service', description: 'Access to multiplayer games', price: '+$1/mo' },
            { title: 'Larger storage', description: 'Extra 1TB of cloud save', price: '+$2/mo' },
            { title: 'Customizable Profile', description: 'Custom theme on your profile', price: '+$3/mo' },
        ]
    )

    return (
        <div className="flex flex-col space-y-4">
            {
                addons.map((addon) => (
                    <div key={addon.title} className="flex flex-row items-center border rounded-md space-x-4 p-4">
                        <input
                            type="checkbox"
                            name="check"
                            className=""
                        />
                        <div className='flex flex-auto flex-col' >
                            <h2 className="font-bold">{addon.title}</h2>
                            <p className="text-CoolGray">{addon.description}</p>
                        </div>
                        <p className="text-PurplishBlue">{addon.price}</p>
                    </div>
                ))
            }

        </div>
    )
}

export default StepThreeForm