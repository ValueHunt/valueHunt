// function createProductList(products) {
//     const productList = document.createElement("ul");
    
//     products.forEach(product => {
//       const listItem = document.createElement("li");
//       listItem.innerHTML = `
//         <div>
//           <img src="${product.image}" alt="${product.name}">
//           <h3>${product.name}</h3>
//           <<p>Price: ${product.price}</p>
//           <a href="${product.link}">View Product</a>
//         </div>
//       `;
//       productList.appendChild(listItem);
//     });
    
//     return productList;
//   }



const products = [];
    const sites = ['flipkart', 'amazon', 'myntra', 'ajio']
    for (let i = 0; i < 4; i++) {
      products.push(sites[i]);
    }

    console.log(products)