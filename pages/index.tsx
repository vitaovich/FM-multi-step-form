import Head from 'next/head'
import { Ubuntu } from '@next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-ubuntu'  })

export default function Home() {
  return (
    <>
      <Head>
        <title>Multi Step Form</title>
      </Head>
      <h1 className="text-3xl">
        Starter NextJS TailwindCSS
      </h1>
    </>
  )
}
