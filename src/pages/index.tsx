import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { DesktopNavbar } from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>DeFi Dev</title>
        <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/310/robot_1f916.png" />
      </Head>
      <DesktopNavbar/>
      <div>
        The Start of Something Great
      </div>
    </div>
  )
}

export default Home
