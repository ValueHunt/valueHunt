import Image from 'next/image'
import styles from '../styles/index/what.module.css'
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
                    ValueHunt, an innovative website that utilizes the power of artificial intelligence to help you find the best deals on clothes online. Our unique platform allows users to simply upload a photo of the clothing item they are interested in, and our AI model extracts key information about the color and style. We then use this information to search across top e-commerce platforms like Amazon, Flipkart, Ajio, and Myntra to provide you with the lowest possible price for that particular clothing item.

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