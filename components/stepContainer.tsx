import React from "react"

const StepContainer: React.FC<{ title: string, description: string, children?: React.ReactNode }> = (props) => {
    return (
        <div className="relative mt-28 bg-white rounded-xl px-8 py-10 mx-6 md:mt-0 md:mx-0 md:space-y-12">
            { props.title.length > 0 &&
                <div className="space-y-2 mb-6">
                    <h1>{props.title}</h1>
                    <p className='text-CoolGray text-lg'>{props.description}</p>
                </div>
            }
            {props.children}
        </ div>
    )
}

export default StepContainer