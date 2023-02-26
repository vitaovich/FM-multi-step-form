import thankYou from '../public/images/icon-thank-you.svg'
import Image from "next/image"

const ThankYou = () => {
    return <>
        <div className="flex flex-col justify-center items-center space-y-8">
            <Image 
                alt="Thank you"
                src={thankYou}
            />
            <h1 className="text-4xl font-bold">Thank you!</h1>

            <p>
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
            </p>
        </div>
    </>
}

export default ThankYou