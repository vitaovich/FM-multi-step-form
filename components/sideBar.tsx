import Image from 'next/image'
import { useState } from 'react'

import sidebarBGMobile from '../public/images/bg-sidebar-mobile.svg'
import SidebarStep from './sidebarStep'
import Step from './Step'

const Sidebar = () => {
    const [steps,setSteps] = useState<Step[]>([
        new Step(1, 'Step 1', 'Your Info'),
        new Step(2, 'Step 2', 'Select plan'),
        new Step(3, 'Step 3', 'Add-ons'),
        new Step(4, 'Step 4', 'Summary'),
    ])

    return (
        <div id='sidebar' className='m-4 p-6'>
            <div className='bg-slate-200/50'>

                {/* <!-- Sidebar start --> */}
                <div className="flex flex-row md:flex-col">
                    {
                        steps.map((step) => (
                            <SidebarStep key={step.id} step={step} />
                        ))
                    }
                </div>

                {/* Step 1
            Your info

            Step 2
            Select plan

            Step 3
            Add-ons

            Step 4
            Summary */}

                {/* <!-- Sidebar end --> */}
            </div>
        </div>
    )
}

export default Sidebar