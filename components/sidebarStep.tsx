import Step from "./Step"

const SidebarStep: React.FC<{ step: Step, selected: boolean }> = (props) => {
    const step = props.step
    return (
        <>
            <div className="flex flex-row mx-2 my-4 items-center md:mx-0">
                <div className={`flex items-center justify-center h-10 w-10 border-2 rounded-full ${props.selected ? 'bg-LightBlue text-MarineBlue border-0' :  'border-white text-white'}`}>{step.num}</div>
                <div className="hidden md:block flex flex-col text-white ml-4">
                    <div className="text-CoolGray">{step.title}</div>
                    <div>{step.description}</div>
                </div>
            </div>
        </>
    )
}

export default SidebarStep