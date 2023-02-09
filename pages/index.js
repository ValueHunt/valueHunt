import Head from 'next/head'

import WhatisVH from '../components/WhatIsVH'

import Footer from '@/components/Footer'


export default function Home() {
  return (
    <>
      <Head>

      <title>ValueHunt</title>
      <meta name="description" content="Get The Lowest Price Of Cloth just by uploading an image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>


      <main >

       

        <WhatisVH />
        


        <Footer />

      </main>
    </>
  )
}
