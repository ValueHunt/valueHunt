import styles from "../styles/vh/vh.module.css";
import Head from "next/head";

export async function getStaticProps() {
  const token = process.env.token;

  return {
    props: {
      token,
    },
  };
}

export default function Contact(props) {
  function createHtml(result) {

    const sites = ['flipkart', 'amazon', 'myntra', 'ajio'];
    const rowsHtml = sites.map((site) => {
      const products = result[site];
      const productsHtml = products
        .map((product, index) => (
          <div key={index}>
            <Image src={product.ImageSrc} alt={product.Label} width={80} height={80} />
            <div>{product.Label}</div>
            <div>{product.Price}</div>
            <a href={product.ProdLink} target="_blank" rel="noopener noreferrer">Buy now</a>
          </div>
        ))
        .join('');

      return (
        <div key={site}>
          <h2>{site.charAt(0).toUpperCase() + site.slice(1)}</h2>
          <div>{productsHtml}</div>
        </div>
      );
    });

    return <div>{rowsHtml}</div>;


    // 30/03/2023
    //   const products = [];
    // const sites = ['flipkart', 'amazon', 'myntra', 'ajio'];

    // for (let i = 0; i < 4; i++) {
    //   let pfName = sites[i];
    //   products.push(result[pfName]);
    // }

    // const rowHtml = products
    //   .map((product, index) => (
    //     <div key={index}>
    //       <h2>{sites[index].charAt(0).toUpperCase() + sites[index].slice(1)}</h2>
    //       <div>
    //         <Image src={product.ImageSrc} alt={product.Label} width={80} height={80} />
    //         <div>{product.Label}</div>
    //         <div>{product.Price}</div>
    //         <a href={product.ProdLink} target="_blank" rel="noopener noreferrer">Buy now</a>
    //       </div>
    //     </div>
    //   ))
    //   .join('');

    // return <div>{rowHtml}</div>;



    //   if (result.amazon) {
    //     products.push(...result.amazon);
    //   }
    //   if (result.myntra) {
    //     products.push(...result.myntra);
    //   }
    //   if (result.ajio) {
    //     products.push(...result.ajio);
    //   }
    //   if (result.flipkart) {
    //     products.push(...result.flipkart);
    //   }

    //   const productRows = [];
    //   for (let i = 0; i < products.length; i += 4) {
    //     const rowProducts = products.slice(i, i + 4);
    //     const rowHtml = rowProducts.map(product => (
    //       `<div class="product">
    //       <h3>${product.Label}</h3>
    //       <img src="${product.ImageSrc}" alt="${product.Label}" />
    //       <p>${product.Price}</p>
    //       <a href="${product.ProdLink}" target="_blank">Buy now</a>
    //     </div>`
    //     )).join('');
    //     productRows.push(`<div class="row">${rowHtml}</div>`);
    //   }

    //   const retailerHtml = `<div class="retailer">
    //   <h2>Products from all retailers</h2>
    //   <div class="products">${productRows.join('')}</div>
    // </div>`;

    const notify_area = document.getElementById("notification");
    notify_area.classList.remove("close");
    notify_area.classList.add("notification");
    notify_area.classList.add("success");
    // notify_area.innerHTML = retailerHtml;



    // const productListHtml = products.map(product => (
    //   `<div class="product">
    //     <h3>${product.Label}</h3>
    //     <img src="${product.ImageSrc}" alt="${product.Label}" />
    //     <p>${product.Price}</p>
    //     <a href="${product.ProdLink}" target="_blank">Buy now</a>
    //   </div>`
    // )).join('');

    // const retailerHtml = `<div class="retailer">
    //   <h2>${retailerName}</h2>
    //   <div class="products">${productListHtml}</div>
    // </div>`;

    // const notify_area = document.getElementById("notification");
    // notify_area.classList.remove("close");
    // notify_area.classList.add("notification");
    // notify_area.classList.add("success");
    // notify_area.innerHTML = retailerHtml;
    // notify_area.classList.add("anim");
    // setTimeout(() => {
    //   notify_area.classList.add("close");
    //   notify_area.classList.remove("success");
    //   notify_area.innerHTML = '';
    // }, 10000);
  }

  async function submitHandler(event) {
    let x = document.getElementById("loader");
    x.classList.remove("close");
    x.classList.add("loading");
    event.preventDefault();
    // console.log("Submitted", event);
    // console.log(process.env.token)
    const clothImgInput = document.getElementById('clothImg');
    var data = new FormData()
    data.append('clothImg', clothImgInput.files[0])
    // data.append('size', event.target.size.value)
    data.append('brand', event.target.brand.value)
    // data.append('clothType', event.target.clothType.value)

    console.log(data)
    // const JSONdata = JSON.stringify(data);
    // console.log(JSONdata)
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        // "Content-Type": "application/json",
        // Accept: "application/json",
        Authorization: `Bearer ${props.token}`,
      },
      // Body of the request is the JSON data we created above.
      body: data,
    };

    const response = await fetch("http://127.0.0.1:5000/vh", options);
    const result = await response.json();

    // createHtml(result);
    // createHtml(result.myntra, 'Myntra');
    // createHtml(result.ajio, 'Ajio');
    // createHtml(result.flipkart, 'Flipkart');

    const productsHtml = createHtml(result);

    // Add the generated HTML after the form
    const formContainer = document.querySelector(".html_form");
    const productsContainer = document.createElement("div");
    productsContainer.innerHTML = productsHtml;
    formContainer.appendChild(productsContainer);



    event.target.clothImg.value = "";
    // event.target.size.value = "";
    event.target.brand.value = "";
    // event.target.clothType.value = "";
    x.classList.add("close");
    x.classList.remove("loading");


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
              <label htmlFor="Upload photo" className={styles.file}>Choose Picture
                <input type="file" id="clothImg" name="clothImg" className={styles.clothId} required accept='image/*' capture='camera' />
              </label>
            </div>

            <div className={styles.brand}>
              <label htmlFor="brand">Choose Brand</label>
              <select name="brand" className={styles.brandTag} id='brandId'>
                <option className={styles.brand} name='brand'>No Brand</option>
                <option className={styles.brand} name='brand'>Allen Solly</option>
                <option className={styles.brand} name='brand'>Adidas</option>
                <option className={styles.brand} name='brand'>Jockey</option>
                <option className={styles.brand} name='brand'>Raymond</option>
              </select>
            </div>

            <input type="submit" value="Submit" className={styles.my_btn} />
          </div>
        </form>
      </div >
    </>
  );
}