import Head from 'next/head'
import { Ubuntu } from '@next/font/google'
import Sidebar from '../components/sideBar'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-ubuntu' })

export default function Home() {
  return (
    <>
      <Head>
        <title>Multi Step Form</title>
      </Head>
      <div className='flex items-center justify-center h-screen bg-Magnolia'>
        <div className='flex bg-white rounded-md'>
          <Sidebar></Sidebar>
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
