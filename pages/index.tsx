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
import ThankYou from '@/components/thankYou'


export default function Home() {
  const [steps, setSteps] = useState<{ num: number, title: string, description: string }[]>([
    { num: 1, title: 'Personal info', description: 'Please provide your name, email address, and phone number.' },
    { num: 2, title: 'Select your plan', description: 'You have the option of monthly or yearly billing.' },
    { num: 3, title: 'Pick add-ons', description: 'Add-ons help enhance your gaming experience.' },
    { num: 4, title: 'Finishing up', description: 'Double-check everything looks OK before confirming.' },
  ])
  const [curStep, setCurStep] = useState<number>(0)
  const formSubmitButton = useRef<HTMLButtonElement>(null)

  const curPrevStepHandler = () => {
    setCurStep((prev: number) => (
      prev - 1
    ))
  }

  const submitCurFormHandler = () => {
    if (curStep < 3) {
      formSubmitButton.current?.click()
    } else {
      curNextStepHandler()
    }
  }

  const curNextStepHandler = () => {
    setCurStep((prev: number) => (
      prev + 1
    ))
  }

  const curFormValidHandler = (isValid: boolean) => {
    if (isValid) {
      curNextStepHandler()
    }
  }

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(new PersonalInfo())
  const [plan, setPlan] = useState<Plan>(new Plan())
  const [addons, setAddons] = useState<Addon[]>([])
  const [isYearly, setIsYearly] = useState<boolean>(false)

  const addPersonalInfoHandler = (name: string, email: string, phone: string) => {
    const newPersonalInfo = new PersonalInfo(name, email, phone)
    setPersonalInfo(newPersonalInfo)
  }

  const addPlanHandler = (plan: Plan) => {
    setPlan(plan)
  }

  const addAddonHandler = (addon: Addon[]) => {
    setAddons(addon)
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
        <div className='bg-white rounded-lg text-MarineBlue mx-4 p-6 md:flex md:flex-row'>
          <Sidebar selectedStep={curStep + 1}></Sidebar>
          <div className="flex flex-col md:mx-24 md:my-4">
            {curStep < 4 &&
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
                    selectedPlan={plan}
                    addPlanHandler={addPlanHandler}
                    yearly={isYearly}
                    yearlyHandler={isYearlyHandler}
                    formValidHandler={curFormValidHandler}
                    buttonRef={formSubmitButton}
                  />
                }
                {curStep == 2 &&
                  <StepThreeForm
                    selectedAddons={addons}
                    addonHandler={addAddonHandler} yearly={isYearly}
                    formValidHandler={curFormValidHandler}
                    buttonRef={formSubmitButton}
                  />
                }
                {curStep == 3 &&
                  <StepFourForm plan={plan} addons={addons} isYearly={isYearly} />
                }
              </ StepContainer>
            }
            {curStep == 4 &&
              <ThankYou></ThankYou>
            }
            <div className={`absolute inset-x-0 bottom-0 flex flex-row mt-24 p-4 ${curStep > 0 ? 'justify-between' : 'justify-end'} bg-white md:static md:bottom-auto md:inset-x-auto`}>
              {curStep > 0 &&
                <button className="px-5 py-3 rounded-md text-CoolGray hover:text-MarineBlue hover:font-bold" onClick={curPrevStepHandler}>
                  Go Back
                </button>}
              {curStep < 4 &&
                <button className={`px-5 py-3 rounded-md text-white ${curStep === 3 ? 'bg-PurplishBlue hover:bg-PastelBlue' : 'bg-MarineBlue hover:bg-MarineBlue/90'}`} onClick={submitCurFormHandler}>
                  {curStep === 3 ? 'Confirm' : 'Next Step'}
                </button>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
