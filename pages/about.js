import styles from '../styles/about/about.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function about() {
  return (
    <>
    <Head>
      <title>About | ValueHunt</title>
    </Head>

      <div className={styles.container}>
        <div className={styles.about}>
          <h2>About Us</h2>
          <p className={styles.para}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dicta quisquam quibusdam, debitis tempora voluptatibus culpa
            aut aspernatur ut laudantium quam, optio perferendis minima?
            Nulla cum a veniam praesentium tempore quia quam eligendi
            aliquid laborum vel temporibus incidunt quas dolor earum eum
            iure quibusdam unde necessitatibus nihil animi, consequatur
            voluptas. Est architecto a totam, eius provident recusandae
            cupiditate repellat voluptates accusamus quia nulla porro
            laborum blanditiis harum modi voluptate, culpa.
          </p>
        </div>
        <div className={styles.images}>
          <Link href='google.com'>
            <Image className={styles.member} src='/../public/icon.png' alt='member image' width={100} height={100}></Image>
          </Link>
          <Link href='google.com'>
            <Image className={styles.member} src='/../public/icon.png' alt='memebr image' width={100} height={100}></Image>
          </Link>
          <Link href='google.com'>
            <Image className={styles.member} src='/../public/icon.png' alt='member image' width={100} height={100}></Image>
          </Link>
        </div>
      </div>
    </>
  )
}
