import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/home/Home.module.css'

import WhatisVH from '../components/WhatIsVH'

import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>ValueHunt</title>
        <meta name="description" content="Get The Lowest Price Of Cloth just by uploading an image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet"/>
      </Head>

      
      <main >
    <WhatisVH/>
 
    
    <Footer/>
      </main>
    </>
  )
}
