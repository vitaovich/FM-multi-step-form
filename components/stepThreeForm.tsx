// import iconArcade from "../public/images/icon-arcade.svg"
import Addon from "@/models/Addon"
import { RefObject, useState } from "react"
import StepThreeFormInput from "./stepThreeFormInput"

const StepThreeForm: React.FC<{ selectedAddons: Addon[], addonHandler: (addon: Addon[]) => void, yearly: boolean, formValidHandler: (isValid: boolean) => void, buttonRef: RefObject<HTMLButtonElement>}> = (props) => {
    const [selectedAddons, setSelectedAddons] = useState<Addon[]>(props.selectedAddons)
    const [addons, setAddons] = useState<Addon[]>(
        [
            new Addon(1, 'Online service', 'Access to multiplayer games', 1),
            new Addon(2, 'Larger storage', 'Extra 1TB of cloud save', 2),
            new Addon(3, 'Customizable Profile', 'Custom theme on your profile', 3),
        ]
    )

    const formatPrice = (price: number, isYearly: boolean) => {
        return `+$${props.yearly ? price * 10 : price}/${isYearly ? 'yr' : 'mo'}`
    }

    const onCheckHandler = (id:number, isChecked: boolean) => {
        if (isChecked) {
            let addon = addons.filter(addon => addon.id === id)
            setSelectedAddons(prev => ([...addon, ...prev]))
        } else {
            setSelectedAddons(prev => (
                prev.filter(addon => addon.id !== id)
            ))
        }
    }

    const onSubmit = () => {
        props.formValidHandler(true)
        props.addonHandler(selectedAddons.sort((a,b) => a.id - b.id))
    }

    return (
        <div className="flex flex-col space-y-4">
            {
                addons.map((addon) => (
                    <StepThreeFormInput
                    key={addon.id} 
                    id={addon.id} 
                    name={addon.name} 
                    description={addon.description} 
                    price={formatPrice(addon.price, props.yearly)} 
                    checked={selectedAddons.some(cur => cur.id === addon.id)} 
                    onCheckHandler={onCheckHandler} />
                ))
            }
            <button ref={props.buttonRef} onClick={onSubmit} className="hidden"></button>
        </div>
    )
}

export default StepThreeForm