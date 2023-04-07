"use strict";

const productContainer = document.querySelector(`.product-wrapper`);

// fetching API for getting the product on `data.json`
const getProduct = () => {
  fetch(`data.json`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const { tshirts, sweatshirts, pants, shorts } = data;
      // concat of all the items in the json
      const products = tshirts.concat(sweatshirts, pants, shorts);

      // function to get the profit percentage of each item
      products.forEach((product) => {
        product.percentage =
          ((product.price - product.cost) * 100) / product.cost;
      });

      // items sorted by highest profit margin
      products.sort((a, b) => b.percentage - a.percentage);

      // copy of the array of items sorted getting only the top six
      const topProducts = products.slice(0, 6);

      productContainer.innerHTML = ``;

      // using `topProducts` to display the sorted copy of top six highest profit margin items
      topProducts.forEach((prod) => {
        const html = `
      <div class="product">
        <div class="product-display">
          <a>
            <img
            class="img-grid-view"
            src="img/product_image/${prod.image}"
            alt="${prod.category}"
            data-hover="${prod["image-hover"]}"
            />
          </a>
          <a><h4>${prod.product}</h4></a>
          <h5>${prod.description}</h5>
          <p>${prod.price.toFixed(2)} €</p>
        </div>
      </div>
      `;

        productContainer.insertAdjacentHTML(`beforeend`, html);
      });

      // select the image element so he following function can be applied *has to be inside the parent function*
      const hoverImg = document.querySelectorAll(`.product-display img`);

      hoverImg.forEach((img) => {
        img.addEventListener(`mouseover`, () => {
          const originalSrc = img.src;
          const imgSrc = img.getAttribute(`data-hover`);
          img.setAttribute(`src`, `img/product_image/${imgSrc}`);
          img.setAttribute(`data-original`, originalSrc);
        });
        img.addEventListener(`mouseout`, () => {
          const originalSrc = img.getAttribute(`data-original`);
          img.setAttribute(`src`, originalSrc);
        });
      });
    });
};
getProduct();
