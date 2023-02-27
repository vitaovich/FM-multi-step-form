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
  const [curStep, setCurStep] = useState<number>(0)
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(new PersonalInfo())
  const [plan, setPlan] = useState<Plan>(new Plan())
  const [addons, setAddons] = useState<Addon[]>([])
  const [isYearly, setIsYearly] = useState<boolean>(false)

  const formSubmitButton = useRef<HTMLButtonElement>(null)

  const curStepHandler = (val: number) => {
    setCurStep((prev: number) => (
      prev + val
    ))
  }

  const submitCurFormHandler = () => {
    if (curStep < 3) {
      formSubmitButton.current?.click()
    } else {
      curStepHandler(1)
    }
  }

  const curFormValidHandler = (isValid: boolean) => {
    if (isValid) {
      curStepHandler(1)
    }
  }

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
  const stepForms =
    [
      {
        title: 'Personal info',
        description: 'Please provide your name, email address, and phone number.',
        form: <StepOneForm
          name={personalInfo.name}
          email={personalInfo.email}
          phoneNum={personalInfo.phoneNumber}
          addPersonalInfoHandler={addPersonalInfoHandler}
          formValidHandler={curFormValidHandler}
          buttonRef={formSubmitButton}
        />
      },
      {
        title: 'Select your plan',
        description: 'You have the option of monthly or yearly billing.',
        form: <StepTwoForm
          selectedPlan={plan}
          addPlanHandler={addPlanHandler}
          yearly={isYearly}
          yearlyHandler={isYearlyHandler}
          formValidHandler={curFormValidHandler}
          buttonRef={formSubmitButton}
        />
      },
      {
        title: 'Pick add-ons',
        description: 'Add-ons help enhance your gaming experience.',
        form: <StepThreeForm
          selectedAddons={addons}
          addonHandler={addAddonHandler} yearly={isYearly}
          formValidHandler={curFormValidHandler}
          buttonRef={formSubmitButton}
        />
      },
      {
        title: 'Finishing up',
        description: 'Double-check everything looks OK before confirming.',
        form: <StepFourForm plan={plan} addons={addons} isYearly={isYearly} />
      },
      {
        title: '',
        description: '',
        form: <ThankYou />
      }
    ]

  return (
    <>
      <Head>
        <title>Multi Step Form</title>
      </Head>
      <div className='flex justify-center min-h-screen bg-Magnolia font-ubuntu md:items-center'>
        <div className='container rounded-lg text-MarineBlue md:flex md:flex-row md:bg-white md:p-4'>
          <Sidebar selectedStep={curStep + 1}></Sidebar>
          <div className="flex flex-col grow md:mx-12">
            <StepContainer title={stepForms[curStep].title} description={stepForms[curStep].description}>
              {stepForms[curStep].form}
            </ StepContainer>
            <div className={`absolute bottom-0 inset-x-0 mt-8 p-4 flex flex-row ${curStep > 0 ? 'justify-between' : 'justify-end'} bg-white md:relative md:bottom-auto md:inset-x-auto`}>
              {curStep > 0 &&
                <button className="px-5 py-3 rounded-md text-CoolGray hover:text-MarineBlue hover:font-bold" onClick={() => curStepHandler(-1)}>
                  Go Back
                </button>
              }
              {curStep < 4 &&
                <button className={`px-5 py-3 rounded-md text-white ${curStep === 3 ? 'bg-PurplishBlue hover:bg-PastelBlue' : 'bg-MarineBlue hover:bg-MarineBlue/90'}`} onClick={submitCurFormHandler}>
                  {curStep === 3 ? 'Confirm' : 'Next Step'}
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
