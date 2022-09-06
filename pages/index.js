import Head from 'next/head'
import LandingPage from './LandingPage/LandingPage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SysDev Code Camp for Dummies 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
    </div>
  )
}
