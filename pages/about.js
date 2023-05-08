import styles from '../styles/about/about.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function About() {
  return (
    <>
    <Head>
      <title>About | ValueHunt</title>
    </Head>

      <div className={styles.container}>
        <div className={styles.about}>
          <h2>About Us</h2>
          <p className={styles.para}>
          ValueHunt was founded by three friends - Ambrish Kumar, Ayush Kothiyal, and Abhishek Kumar - who shared a passion for leveraging technology to make online shopping more efficient and affordable.After experiencing the frustration of spending hours searching for the best deals on clothes online, the trio realized that there was a need for a platform that could simplify the process and provide users with accurate information about prices and availability.We decided to combine our expertise in artificial intelligence, data analytics, and e-commerce to create ValueHunt, an innovative website that utilizes the power of AI to help users find the best deals on clothes online.We are committed to providing our users with a seamless and personalized shopping experience, and we continue to invest in our AI model and platform to ensure that we deliver the most accurate and up-to-date information about clothing items and their prices.As founders, we are proud and excited about the potential for our platform to revolutionize the way people shop for clothes online. We are grateful to our users for their support and feedback, and we look forward to continuing to innovate and improve our platform to meet their needs.
          </p>
        </div>
        <div className={styles.images}>
          <Link href='google.com'>
            <Image className={styles.member} src='/am.jpeg' alt='member image' width={100} height={100}></Image>
          </Link>
          <Link href='google.com'>
            <Image className={styles.member} src='/icon.png' alt='memebr image' width={100} height={100}></Image>
          </Link>
          <Link href='google.com'>
            <Image className={styles.member} src='/icon.png' alt='member image' width={100} height={100}></Image>
          </Link>
        </div>
      </div>
    </>
  )
}
