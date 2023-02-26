import Image from 'next/image'
import { useState } from 'react'

import sidebarBGMobile from '../public/images/bg-sidebar-mobile.svg'
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
        <div id='sidebar' className='p-6 absolute top-0 inset-x-0 md:static md:top-auto md:inset-x-auto'>
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