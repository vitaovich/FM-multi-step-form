import StepContainer from '@/components/stepContainer'
import StepOneForm from '@/components/stepOneForm'
import StepTwoForm from '@/components/stepTwoForm'
import StepThreeForm from '@/components/stepThreeForm'
import StepFourForm from '@/components/stepFourForm'
import PersonalInfo from '@/models/PersonalInfo'
import Head from 'next/head'
import React, { useRef, useState } from 'react'
import Sidebar from '../components/sideBar'
import Addon from '@/models/Addon'
import Plan from '@/models/Plan'


export default function Home() {
  const [steps, setSteps] = useState<{ num: number, title: string, description: string }[]>([
    { num: 1, title: 'Personal info', description: 'Please provide your name, email address, and phone number.' },
    { num: 2, title: 'Select your plan', description: 'You have the option of monthly or yearly billing.' },
    { num: 3, title: 'Pick add-ons', description: 'Add-ons help enhance your gaming experience.' },
    { num: 4, title: 'Finishing up', description: 'Double-check everything looks OK before confirming.' },
  ])
  const [curStep, setCurStep] = useState<number>(0)
  const [curFormValid, setFormValid] = useState<boolean>(false)
  const formSubmitButton = useRef<HTMLButtonElement>(null)

  const curPrevStepHandler = () => {
    setCurStep((prev: number) => (
      prev - 1
    ))
  }

  const curNextStepHandler = () => {
    // revisit
    formSubmitButton.current?.click()
    if (curFormValid) {
      setCurStep((prev: number) => (
        prev + 1
      ))
    }
  }

  const curFormValidHandler = (isValid: boolean) => {
    setFormValid(isValid)
  }

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(new PersonalInfo())
  const [plan, setPlan] = useState<Plan>()
  const [addons, setAddons] = useState<Addon[]>()
  const [isYearly, setIsYearly] = useState<boolean>(false)

  const addPersonalInfoHandler = (name: string, email: string, phone: string) => {
    const newPersonalInfo = new PersonalInfo(name, email, phone)
    setPersonalInfo(newPersonalInfo)
  }

  const isYearlyHandler = (isYearly: boolean) => {
    setIsYearly((prev: boolean) => {
      return !prev
    })
  }

  return (
    <>
      <Head>
        <title>Multi Step Form</title>
      </Head>
      <div className='flex items-center justify-center min-h-screen bg-Magnolia font-ubuntu'>
        <div className='bg-white rounded-md text-MarineBlue mx-4 p-6'>
          {/* <Sidebar></Sidebar> */}
          <StepContainer title={steps[curStep].title} description={steps[curStep].description}>
            {curStep == 0 &&
              <StepOneForm
                name={personalInfo.name}
                email={personalInfo.email}
                phoneNum={personalInfo.phoneNumber}
                addPersonalInfoHandler={addPersonalInfoHandler}
                formValidHandler={curFormValidHandler}
                buttonRef={formSubmitButton}
              />
            }
            {curStep == 1 &&
              <StepTwoForm
                yearly={isYearly}
                yearlyHandler={isYearlyHandler}
              />
            }
            {curStep == 2 &&
              <StepThreeForm yearly={isYearly} />
            }
            {curStep == 3 &&
              <StepFourForm />
            }
          </ StepContainer>
          <div className={`flex flex-row mt-24 ${curStep > 0 ? 'justify-between' : 'justify-end'}`}>
            {curStep > 0 &&
              <button className="px-5 py-3 rounded-md" onClick={curPrevStepHandler}>
                Go Back
              </button>}
            {curStep < 4 &&
              <button className="px-5 py-3 rounded-md text-white bg-MarineBlue" onClick={curNextStepHandler}>
                Next Step
              </button>}
          </div>
        </div>
      </div>

      {/* <!-- Step 1 start -->

      Personal info
      Please provide your name, email address, and phone number.

      Name
      e.g. Stephen King

      Email Address
      e.g. stephenking@lorem.com

      Phone Number
      e.g. +1 234 567 890

      Next Step

      <!-- Step 1 end -->

      <!-- Step 2 start -->

      Select your plan
      You have the option of monthly or yearly billing.

      Arcade
      $9/mo

      Advanced
      $12/mo

      Pro
      $15/mo

      Monthly
      Yearly

      Go Back
      Next Step

      <!-- Step 2 end -->

      <!-- Step 3 start -->

      Pick add-ons
      Add-ons help enhance your gaming experience.

      Online service
      Access to multiplayer games
      +$1/mo

      Larger storage
      Extra 1TB of cloud save
      +$2/mo

      Customizable Profile
      Custom theme on your profile
      +$2/mo

      Go Back
      Next Step

      <!-- Step 3 end -->

      <!-- Step 4 start -->

      Finishing up
      Double-check everything looks OK before confirming.

      <!-- Dynamically add subscription and add-on selections here -->

      Total (per month/year)

      Go Back
      Confirm

      <!-- Step 4 end -->

      <!-- Step 5 start -->

      Thank you!

      Thanks for confirming your subscription! We hope you have fun
      using our platform. If you ever need support, please feel free
      to email us at support@loremgaming.com.

      <!-- Step 5 end --> */}

    </>
  )
}
