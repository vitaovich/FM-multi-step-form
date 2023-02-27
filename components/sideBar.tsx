import { useState } from 'react'

import SidebarStep from './sidebarStep'
import Step from './Step'

const Sidebar: React.FC<{selectedStep: number}> = (props) => {
    const [steps,setSteps] = useState<Step[]>([
        new Step(1, 'Step 1', 'Your Info'),
        new Step(2, 'Step 2', 'Select plan'),
        new Step(3, 'Step 3', 'Add-ons'),
        new Step(4, 'Step 4', 'Summary'),
    ])

    return (
        <div id='sidebar' className='absolute top-0 inset-x-0 p-6 md:relative md:top-auto md:inset-x-auto md:w-80'>
            <div className=''>
                <div className="flex flex-row justify-center md:flex-col">
                    {
                        steps.map((step) => (
                            <SidebarStep key={step.id} step={step} selected={step.num === props.selectedStep} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar