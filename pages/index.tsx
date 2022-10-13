import type { NextPage } from 'next'
import Head from 'next/head'
import { Body, Navbar, Footer } from '../components'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col bg-[#000] text-white relative">
      <Head>
        <title>Schadfolio</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default Home
