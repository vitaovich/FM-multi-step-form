import React from "react"

const StepContainer: React.FC<{ title: string, description: string, children?: React.ReactNode }> = (props) => {
    return (
        <div className="space-y-12">
            <div className="space-y-2">
                <h1 className='text-4xl font-bold'>{props.title}</h1>
                <p className='text-CoolGray text-lg'>{props.description}</p>
            </div>
            {props.children}
        </ div>
    )
}

export default StepContainer