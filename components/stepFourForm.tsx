const StepFourForm = () => {
    return (
        <div>
            <div className="flex flex-col bg-Alabaster rounded-md p-4 space-y-6">
                <div className="flex flex-row items-center">
                    <div className="flex flex-col flex-auto">
                        <h1 className="font-bold">Arcade (Monthly)</h1>
                        <p className="text-CoolGray underline">Change</p>
                    </div>
                    <p className="font-bold">$9/mo</p>
                </div>
                <div className="border"></div>
                <div className="flex flex-row">
                    <p className="flex-auto text-CoolGray">Online service</p>
                    <p>+$1/mo</p>
                </div>
                <div className="flex flex-row">
                    <p className="flex-auto text-CoolGray">Larger storage</p>
                    <p>+$2/mo</p>
                </div>
            </div>
            <div className="flex flex-row items-center p-4">
                <p className="flex-auto text-CoolGray">Total (per month)</p>
                <p className="font-bold text-PurplishBlue text-xl">+$12/mo</p>
            </div>
        </div>
    )
}

export default StepFourForm