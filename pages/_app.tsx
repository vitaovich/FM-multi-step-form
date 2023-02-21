import '@/styles/globals.css'
import { Ubuntu } from '@next/font/google'
import type { AppProps } from 'next/app'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-ubuntu' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${ubuntu.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
