import Link from "next/link"
import styles from '../styles/navbar1.module.css'
import Image from "next/image"
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  }



  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link href={'/'}>
            <Image className={styles.img} src='/icon.png' alt="logo" width={80} height={80}>
            </Image>
          </Link>
        </div>

        <div className={`${styles.navItems} ${isOpen ? styles.show : ''}`}>
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
        <div className={styles.hamburgerBtn} onClick={handleMenuToggle}>
          <span className={`${styles.bar1} ${styles.bar}`}></span>
          <span className={`${styles.bar2} ${styles.bar}`}></span>
          <span className={`${styles.bar3} ${styles.bar}`}></span>
        </div>
      </div>
      <div className='close' id="notification"></div>
    </>
  )

}
