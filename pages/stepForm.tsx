const StepForm: React.FC<{title: string, description: string}> = (props) => {
    return (
        <>
            <h1 className='text-4xl'>{props.title}</h1>
            <p className='text-CoolGray text-lg'>{props.description}</p>

            <div className='flex flex-col space-y-2'>
                <label htmlFor='name' className=''>Name</label>
                <input id='name' type="text" placeholder="e.g. Stephen King" className="border border-LightGray rounded-md px-4 py-2 placeholder:font-bold" />
            </div>
        </>
    )
}
export default StepForm