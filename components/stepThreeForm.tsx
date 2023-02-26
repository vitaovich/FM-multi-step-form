// import iconArcade from "../public/images/icon-arcade.svg"
import Addon from "@/models/Addon"
import { useState } from "react"

const StepThreeForm: React.FC<{addonHandler: (addon: Addon) => void, yearly: boolean}> = (props) => {
    const [addons, setAddons] = useState<Addon[]>(
        [
            new Addon('Online service', 'Access to multiplayer games', 1),
            new Addon('Larger storage', 'Extra 1TB of cloud save', 2),
            new Addon('Customizable Profile', 'Custom theme on your profile', 3),
        ]
    )

    const formattedAddons = addons.map((addon) => (
        { addon: addon, price: `+$${props.yearly ? addon.price * 10 : addon.price}/${props.yearly ? 'yr' : 'mo'}` }
    )
    )

    const onClickAddonHandler = (addon: Addon) => {
        props.addonHandler(addon)
    }

    return (
        <div className="flex flex-col space-y-4">
            {
                formattedAddons.map((addon) => (
                    <div key={addon.addon.name} className="flex flex-row items-center border rounded-md space-x-4 p-4" onClick={() => onClickAddonHandler(addon.addon)}>
                        <input
                            type="checkbox"
                            name="check"
                            className=""
                        />
                        <div className='flex flex-auto flex-col' >
                            <h2 className="font-bold">{addon.addon.name}</h2>
                            <p className="text-CoolGray">{addon.addon.description}</p>
                        </div>
                        <p className="text-PurplishBlue">{addon.price}</p>
                    </div>
                ))
            }

        </div>
    )
}

export default StepThreeForm