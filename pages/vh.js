import styles from '../styles/vh/vh.module.css'
import Head from 'next/head'

export async function getStaticProps() {
    const token = process.env.token

    return {
        props: {
            token,
        }
    }
}

export default function Contact(props) {

    function createHtml(msg, color) {

        const notify_area = document.getElementById('notification')
        // console.log(notify_area)
        // console.log('msg,color' ,msg,color)
        notify_area.classList.remove('close')
        notify_area.classList.add('notification')
        notify_area.classList.add(color)
        notify_area.innerHTML = `<h2>${msg}</h2>`
        notify_area.classList.add('anim')
        setTimeout(() => {


            notify_area.classList.add('close')
            notify_area.classList.remove('success')
            notify_area.classList.remove('danger')


        }, 10000);

    }



    async function submitHandler(event) {
        let x = document.getElementById("loader");
        x.classList.remove('close')
        x.classList.add('loading')
        event.preventDefault();
        // console.log("Submitted", event);
        // console.log(process.env.token)
        const data = {
            clothImg: event.target.clothImg.value,
            size: event.target.size.value,
            brand: event.target.brand.value,
            clothType: event.target.clothType.value
        }
        // console.log(data)
        const JSONdata = JSON.stringify(data)
        // console.log(JSONdata)
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${props.token}`
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        }

        const response = await fetch('Enter the backend url', options)
        const result = await response.json()
        event.target.clothImg.value = ''
        event.target.size.value = ''
        event.target.brand.value = ''
        event.target.clothType.value = ''
        x.classList.add('close')
        x.classList.remove('loading')

        // if (!response.ok) {

        //     createHtml(result, 'danger')
        // }
        // else {

        //     createHtml(result, 'success')


        // }

    }


    return (
        <>
            <Head>
                <title>App | ValueHunt</title>
            </Head>


            <div className={styles.html_form}>
                <form action="#" method="post" onSubmit={submitHandler} className={styles.innerform}>
                    <div className={styles.per_info}>
                        <div className={styles.cloth}>
                            <label htmlFor="Upload photo" className={styles.file}>Choose picture
                                <input type="file" name="clothImg" className={styles.clothId} required accept='image/*' capture='camera' />
                            </label>
                        </div>
                        <div className={styles.size}>
                            <label htmlFor="size">Size</label>
                            <input type="number" name="size" className={styles.sizeId} max={99} min={20} id={styles.size} />
                        </div>
                        <div className={styles.brand}>
                            <label htmlFor="brand">Choose Brand</label>
                            <select name="brand" className={styles.brandId}>
                                <option className={styles.brand} name='brand'>No Brand</option>
                                <option className={styles.brand} name='brand'>Adidas</option>
                                <option className={styles.brand} name='brand'>ck</option>
                                <option className={styles.brand} name='brand'>lenovo</option>
                                <option className={styles.brand} name='brand'>hp</option>
                            </select>
                        </div>
                        <div className={styles.clothtype}>
                            <label htmlFor="clothType">Choose Cloth Type</label>
                            <select name="clothType" className={styles.clothTypeId}>
                                <option name='clothType' className={styles.typeOf}>Select Cloth Type</option>
                                <option name='clothType' className={styles.typeOf}>Cotton</option>
                                <option name='clothType' className={styles.typeOf}>No Cotton</option>
                                <option name='clothType' className={styles.typeOf}>Mixed</option>
                            </select>
                        </div>
                        <input type="submit" value="Submit" className={styles.my_btn} />
                    </div>
                </form>
            </div>
        </>
    );
}
