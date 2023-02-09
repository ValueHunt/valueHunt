import Link from "next/link"
import styles from '../styles/navbar.module.css'
import Image from "next/image"

export default function NavBar()
{
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link href={'/'}>
            <Image className={styles.img} src='/../public/icon.png' alt="logo" width={80} height={80}>
            </Image>
          </Link>
        </div>

        <div className={styles.navItems}>
          <Link href='/'>
            Home
          </Link>
          <Link href='/about'>
            About
          </Link>
          <Link href='/contact'>
            Contact Us
          </Link>
        </div>
      </div>

    </>
  )
  
}
