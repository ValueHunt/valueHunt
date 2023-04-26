import Image from 'next/image'
import styles from '../styles/index/WhatIsVh.module.css'
import Button from './Button'


export default function WhatIs() {
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
                
                <div className={styles.try}>
                {/* <Button className={'Try-valueHunt'} text={'Try ValueHunt'} icon={'\uD83E\uDC7D'}/> */}
                <Button props={{className:'Try-valueHunt',text:'Try ValueHunt',icon:'\uD83E\uDC7D',link:'/vh'}}/>
                </div>
            </div>

            {/* ***************************Image of VH********************************* */}
            <Image src='/icon.png' alt="VH LOGO" width={250} height={250} className={styles.logo_img} priority />
        </div>
    )

}