// import iconArcade from "../public/images/icon-arcade.svg"
import Addon from "@/models/Addon"
import { RefObject, useState } from "react"

const StepThreeForm: React.FC<{ selectedAddons: Addon[], addonHandler: (addon: Addon[]) => void, yearly: boolean, formValidHandler: (isValid: boolean) => void, buttonRef: RefObject<HTMLButtonElement>}> = (props) => {
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
    const [selectedAddons, setSelectedAddons] = useState<Addon[]>(props.selectedAddons)

    const onClickAddonHandler = (addon: Addon) => {
        if (!selectedAddons.map((addon) => addon.name).includes(addon.name)){
            setSelectedAddons((prev) => ([addon, ...prev]))
        } else {
            setSelectedAddons((prev) => {
                const removeIndex = prev.map((addon) => addon.name).indexOf(addon.name)
                prev.splice(removeIndex, 1)
                return [...prev]
            })
        }
    }

    const onSubmit = () => {
        props.formValidHandler(true)
        props.addonHandler(selectedAddons)
    }

    return (
        <div className="flex flex-col space-y-4">
            {
                formattedAddons.map((addon) => (
                    <div key={addon.addon.name} className={`flex flex-row items-center border rounded-md space-x-4 p-4 ${selectedAddons.map((addon) => addon.name).includes(addon.addon.name) ? 'bg-PurplishBlue/5 border-PurplishBlue' : ''}`} onClick={() => onClickAddonHandler(addon.addon)}>
                        <input
                            type="checkbox"
                            name="check"
                            checked={selectedAddons.map((addon) => addon.name).includes(addon.addon.name)}
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
            <button ref={props.buttonRef} onClick={onSubmit} className="hidden">Next Step</button>
        </div>
    )
}

export default StepThreeForm