import Image from 'next/image'
import styles from '../styles/home/WhatIsVh.module.css'

export default function WhatIs()
{
    return (
        <div className={styles.con}>

{/* ****************************************************Content Starts*************************** */}

            <div className={styles.content}>
 {/* ***********************************Heading ************************************* */}
           <div className={styles.heading}>
            <p>
            What is ValueHunt?</p>
           </div>
  {/* *********************************************Paragraph ********************************** */}
           <div className={styles.para}>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum tempora inventore minus cumque asperiores pariatur. Explicabo in obcaecati deleniti rem culpa quibusdam, iste ut temporibus quis veritatis adipisci deserunt.
            
            </p>
            
           </div>
           
         </div>

{/* ***************************Image of VH********************************* */}
        <Image src='/icon.png' alt="VH LOGO" width={250} height={250} className={styles.logo_img}  priority/>
        
         </div>
    )
    
}