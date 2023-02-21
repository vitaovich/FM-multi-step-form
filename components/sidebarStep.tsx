import Step from "./Step"

const SidebarStep: React.FC<{ step: Step }> = (props) => {
    const step = props.step
    return (
        <>
            <div className="flex flex-row mx-2 bg-red-200 my-4 items-center md:mx-0">
                <div className='flex items-center justify-center h-10 w-10 border-2 border-white text-white rounded-full'>{step.num}</div>
                <div className="hidden md:block flex flex-col text-white ml-4">
                    <div>{step.title}</div>
                    <div>{step.description}</div>
                </div>
            </div>
        </>
    )
}

export default SidebarStep