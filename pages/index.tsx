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
      <div className='flex justify-center min-h-screen bg-Magnolia font-ubuntu md:items-center'>
        <div className='rounded-lg text-MarineBlue md:flex md:flex-row md:bg-white md:p-4'>
          <Sidebar selectedStep={curStep + 1}></Sidebar>
          <div className="flex flex-col">
            <div className="relative mt-28 bg-white rounded-lg p-4 mx-6 md:mt-0 md:mx-0">
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
            </div>
            <div className={`mt-8 p-4 flex flex-row ${curStep > 0 ? 'justify-between' : 'justify-end'} bg-white`}>
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
