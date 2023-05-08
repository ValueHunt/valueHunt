import Head from 'next/head'
import HowVH from '../components/HowVH'
import WhatisVH from '../components/WhatIsVH'
// import Button from '@/components/Button'

export default function Home() {
  return (
    <>
      <Head>

      <title>ValueHunt</title>
      <meta name="description" content="Get The Lowest Price Of Cloth just by uploading an image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel='shortcut icon' href='/img/icon.jpeg'/>
        
      </Head>
        <WhatisVH />
        <HowVH />
    </>
  )
}
