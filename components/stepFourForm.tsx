import Addon from "@/models/Addon"
import Plan from "@/models/Plan"

const StepFourForm: React.FC<{ plan: Plan, addons: Addon[], isYearly: boolean }> = (props) => {
    const total = props.plan.price + props.addons.map((addon) => (addon.price)).reduce((total,cur) => total + cur)
    
    return (
        <div>
            <div className="flex flex-col bg-Alabaster rounded-md p-4 space-y-6">
                <div className="flex flex-row items-center">
                    <div className="flex flex-col flex-auto">
                        <h1 className="font-bold">{`${props.plan.name} (${props.isYearly ? 'Yearly' : 'Monthly'})`}</h1>
                        <p className="text-CoolGray underline">Change</p>
                    </div>
                    <p className="font-bold">{`$${props.isYearly ? props.plan.price * 10 : props.plan.price}/${props.isYearly ? 'yr' : 'mo'}`}</p>
                </div>
                <div className="border"></div>
                {
                    props.addons.map((addon) => (
                        <div key={addon.id} className="flex flex-row">
                            <p className="flex-auto text-CoolGray">{addon.name}</p>
                            <p>{`+$${props.isYearly ? addon.price * 10 : addon.price}/${props.isYearly ? 'yr' : 'mo'}`}</p>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-row items-center p-4">
                <p className="flex-auto text-CoolGray">Total (per {`${props.isYearly ? 'year' : 'month'}`})</p>
                <p className="font-bold text-PurplishBlue text-xl">{`+$${props.isYearly ? total * 10 : total}/${props.isYearly ? 'yr' : 'mo'}`}</p>
            </div>
        </div>
    )
}

export default StepFourForm