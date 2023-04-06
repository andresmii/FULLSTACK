"use strict";

const productPageContainer = document.querySelector(`.product-layout`);

const getProduct = () => {
  fetch(`data.json`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const { tshirts, sweatshirts, pants, shorts } = data;
      const products = tshirts
        .concat(sweatshirts, pants, shorts)
        .sort((a, b) =>
          a.description > b.description
            ? 1
            : b.description > a.description
            ? -1
            : 0
        );

      productPageContainer.innerHTML = ``;

      products.forEach((prod) => {
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

        productPageContainer.insertAdjacentHTML(`beforeend`, html);
      });

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
