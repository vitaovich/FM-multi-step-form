import Addon from "@/models/Addon"
import Plan from "@/models/Plan"

const StepFourForm: React.FC<{ plan: Plan, addons: Addon[], isYearly: boolean }> = (props) => {
    const totalAddons = () => {
        let total = 0
        props.addons.forEach(addon => total += addon.price)
        return total
    }
    const total = props.plan.price + totalAddons()

    const pageInfo = {
        header: `${props.plan.name} (${props.isYearly ? 'Yearly' : 'Monthly'})`,
        plan: `$${props.isYearly ? props.plan.price * 10 : props.plan.price}/${props.isYearly ? 'yr' : 'mo'}`,
        total: `Total (per ${props.isYearly ? 'year' : 'month'})`,
        totalPrice: `+$${props.isYearly ? total * 10 : total}/${props.isYearly ? 'yr' : 'mo'}`,
        addonsHelper: (price: number, isYearly: boolean) => (`+$${isYearly ? price * 10 : price}/${props.isYearly ? 'yr' : 'mo'}`)
    }

    return (
        <div>
            <div className="flex flex-col bg-Alabaster rounded-md p-4 space-y-6">
                <div className="flex flex-row items-center">
                    <div className="flex flex-col flex-auto">
                        <h1 className="font-bold">{pageInfo.header}</h1>
                        <p className="text-CoolGray underline hover:text-PurplishBlue">Change</p>
                    </div>
                    <p className="font-bold">{pageInfo.plan}</p>
                </div>
                <div className="border"></div>
                {
                    props.addons.map((addon) => (
                        <div key={addon.id} className="flex flex-row">
                            <p className="flex-auto text-CoolGray">{addon.name}</p>
                            <p>{pageInfo.addonsHelper(addon.price, props.isYearly)}</p>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-row items-center p-4">
                <p className="flex-auto text-CoolGray">{pageInfo.total}</p>
                <p className="font-bold text-PurplishBlue text-xl">{pageInfo.totalPrice}</p>
            </div>
        </div>
    )
}

export default StepFourForm