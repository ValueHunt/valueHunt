import Image from 'next/image'
import styles from '../styles/index/how.module.css'
import Button from './Button'


export default function HowVH() {
    return (
        <div className={styles.container}>
            {/* ***************************Image of VH********************************* */}
            {/* <Image className={styles.logo_img} priority src='/img/icon.jpeg' alt="VH LOGO" width={250} height={250} /> */}
            {/* ****************************************************Content Starts*************************** */}

            <div className={styles.content}>
                {/* ***********************************Heading ************************************* */}
                <div className={styles.heading}>
                    <p className={styles.how}>How it works</p>
                    <p className={styles.secondHeading}>Find your style in 3 simple steps</p>
                </div>
                <div className={styles.stepContainer}>

                    <div className={styles.step1}>
                        <p className={styles.stepNumber}>01</p>
                        <div className={styles.inside}>
                            <h3 className={styles.stepHeading}>Click on Try ValueHunt</h3>
                            <Image className={styles.step1Img} priority src='/img/img1.png' alt="site" width={500} height={600} />
                        </div>
                    </div>

                    <div className={styles.step2}>
                        <p className={styles.stepNumber}>02</p>
                        <div className={styles.inside1}>
                            <h3 className={styles.stepHeading}>Upload your style</h3>
                            <Image className={styles.step2Img} priority src='/img/img2.png' alt="site" width={500} height={600} />
                        </div>
                    </div>

                    <div className={styles.step3}>
                        <p className={styles.stepNumber}>03</p>
                        <div className={styles.inside}>
                            <h3 className={styles.stepHeading3}>You got your fashion</h3>
                            <Image className={styles.step3Img} priority src='/img/img3.png' alt="site" width={500} height={600} />
                        </div>
                    </div>
                </div>
                {/* *********************************************Paragraph ********************************** */}
                <div className={styles.try_HowVH}>
                    <Button props={{ className: 'Try-valueHunt', text: 'Try ValueHunt', icon: '\uD83E\uDC7D', link: '/vh' }} />
                </div>
            </div>
            {/* **************************** TryIt Button ********************************** */}



        </div>
    )

}