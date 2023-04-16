import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/vh/vh.module.css';
import res_styles from '../styles/vh/resultPage.module.css';

export async function getStaticProps() {
  const token = process.env.token;

  return {
    props: {
      token,
    },
  };
}

export default function Contact(props) {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [formKey, setFormKey] = useState(0);

  async function submitHandler(event) {
    const x = document.getElementById("loader");
    x.classList.remove("close");
    x.classList.add("loading");

    event.preventDefault();
    setLoading(true);

    const clothImgInput = document.getElementById('clothImg');
    const data = new FormData();
    data.append('clothImg', clothImgInput.files[0]);
    data.append('brand', event.target.brand.value);

    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${props.token}`,
      },
      body: data,
    };
    setError(null);
    setResults(null);
    try {
      const response = await fetch('http://127.0.0.1:5000/vh', options);
      const result = await response.json();
      setResults(result);
      setLoading(false);
      x.classList.remove("loading");
      x.classList.add("close");
    } catch (error) {
      setLoading(false);
      x.classList.remove("loading");
      x.classList.add("close");
      setError('Something went wrong. Please try again later');
    }
    setFormKey(formKey + 1);
  }

  return (
    <>
      <Head>
        <title>App | ValueHunt</title>
      </Head>


      <div className={styles.html_form}>
        <form action="#" method="post" onSubmit={submitHandler} className={styles.innerform} key={formKey}>
          <div className={styles.per_info}>
            <div className={styles.cloth}>
              <label htmlFor="Upload photo" className={styles.file}>Choose Picture
                <input type="file" id="clothImg" name="clothImg" className={styles.clothId} required accept='image/*' capture='camera' />
              </label>
            </div>

            <div className={styles.brand}>
              <label htmlFor="brand">Choose Brand</label>
              <select name="brand" className={styles.brandId}>
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

      {/* output form */}


      <div className={res_styles.mainContainer}>
        {results && (
          <div className={res_styles.resultContainer}>
            {results !== 'Image is Corrupted' ? (
              <>
                <h2>Results</h2>
                {Object.entries(results).map(([site, products]) => (
                  <div key={site} >
                    <h3 className={res_styles.siteName}>{site.charAt(0).toUpperCase() + site.slice(1)}</h3>
                    {Array.isArray(products) ? (products.length === 0 ? (
                      <div className={res_styles.noProduct}>No products found</div>
                    ) : (
                      <div className={res_styles.productContainer}>
                        {products.map((product, index) => (
                          <div key={index} className={res_styles.prodContainer}>
                            <a
                              href={product.ProdLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                src={product.ImageSrc}
                                width={200}
                                height={200}
                              />
                              <div className={res_styles.buy_link}>
                                <a
                                  href={product.ProdLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {product.Label.substring(0, 20)}
                                </a>
                              </div>
                              <div className={res_styles.price}>₹{product.Price}</div>

                            </a>

                          </div>
                        ))}
                      </div>
                    )) : (
                      <div className={res_styles.noProduct}>No Products Found</div>
                    )}
                  </div>
                ))}
              </>) : (<div className={res_styles.noProduct}>Image is Corrupted</div>
            )}
          </div>
        )}
        {error && (
          <div className={res_styles.error_message}>{error}</div>
        )}
      </div>
    </>
  );
}
