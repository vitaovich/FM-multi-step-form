import React from "react"

const StepContainer: React.FC<{ title: string, description: string, children?: React.ReactNode }> = (props) => {
    return (
        <div className="relative mt-28 bg-white rounded-lg p-4 mx-6 md:mt-0 md:mx-0 md:space-y-12">
            <div className="space-y-2">
                <h1 className='text-3xl font-bold'>{props.title}</h1>
                <p className='text-CoolGray text-md'>{props.description}</p>
            </div>
            {props.children}
        </ div>
    )
}

export default StepContainer