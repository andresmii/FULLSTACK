"use strict";

const productPageContainer = document.querySelector(`.product-layout`);

const categoryList = document.querySelector(`#category-list`);
const priceList = document.querySelector(`#price-list`);

const categories = document.querySelectorAll(`input[name="category"]`);
const prices = document.querySelectorAll(`input[name="price"]`);

/////////////////////////////////////////
/////////////////////////////////////////

// fetching API for getting the product on `data.json`
const getProduct = () => {
  fetch(`data.json`)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      const { tshirts, sweatshirts, pants, shorts } = data;
      // concat of all the items in the json
      const products = tshirts.concat(sweatshirts, pants, shorts);

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
              <p class="price">${prod.price.toFixed(2)} €</p>
            </div>
          </div>
        `;

        productPageContainer.insertAdjacentHTML(`beforeend`, html);
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

      categories.forEach((i) => {
        i.addEventListener(`change`, () => {
          const selectedCategories = Array.from(categories)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);
          console.log(selectedCategories);

          const filteredCategories = products.filter((product) => {
            const isInSelectedCategories = selectedCategories.includes(
              product.category
            );
            return isInSelectedCategories;
          });
          console.table(filteredCategories);
        });
      });

      prices.forEach((i) => {
        i.addEventListener(`change`, () => {
          const selectedPrices = Array.from(prices)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);
          console.log(selectedPrices);

          const filteredPrices = products.filter((product) => {
            const isInSelectedPrices = selectedPrices.some((selectedPrice) => {
              if (selectedPrice === "under-20") {
                return product.price < 20;
              } else if (selectedPrice === "20-50") {
                return product.price >= 20 && product.price < 50;
              } else if (selectedPrice === "50-100") {
                return product.price >= 50 && product.price < 100;
              } else if (selectedPrice === "over-100") {
                return product.price >= 100;
              }
            });
            return isInSelectedPrices;
          });
          console.table(filteredPrices);
        });
      });
      ///////////////
    }); // then(data) Promise finishes ***
};
getProduct();

//////////////////////////////////////////////////////////

const sortLH = document.querySelector(`.sortPriceLH`);
const sortHL = document.querySelector(`.sortPriceHL`);
const sortAZ = document.querySelector(`.sortAZ`);
const sortZA = document.querySelector(`.sortZA`);

//////////////////////////////////////////////////////////
