"use strict";

const productPageContainer = document.querySelector(`.product-layout`);

const categoryList = document.querySelector(`#category-list`);
const categories = document.querySelectorAll(`input[name="category"]`);

const showing = document.querySelector(`.showing`);

const sortLH = document.querySelector(`.sortPriceLH`);
const sortHL = document.querySelector(`.sortPriceHL`);
const sortAZ = document.querySelector(`.sortAZ`);
const sortZA = document.querySelector(`.sortZA`);

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

      // html element where the products are displayed
      const createProductHTML = (prod) => {
        return `
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
            <div class="price-addtocart">
              <p class="price">${prod.price.toFixed(2)} €</p>
              <div class="addtocart">
                <label>add to cart</label>
                <input
                  class="cartPush"
                  id="removeCart"
                  type="button"
                  onclick=""
                  value="-"
                />
                <input
                  class="cartPush"
                  id="addCart"
                  type="button"
                  onclick=""
                  value="+"
                />
              </div>
            </div>
          </div>
        </div>
      `;
      };

      ////////////////////

      let count = 0; // declare a variable to count every created and displayed product
      productPageContainer.innerHTML = ``; // empty the content of the container where the products are going to be displayed
      products.forEach((prod) => {
        const html = createProductHTML(prod);
        productPageContainer.insertAdjacentHTML(`beforeend`, html);
        count++;
      }); // loop over the data fetched and create every product

      ////////////////////
      // `showing` label
      showing.innerHTML = `Showing: <strong>${count}</strong>`;

      ////////////////////
      // *selected element has to be inside the parent function for the `hoverImg` method to work*
      const hoverImg = document.querySelectorAll(`.img-grid-view`);
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

      ////////////////////
      // filter by categories *selectors are outside the whole function*
      categories.forEach((i) => {
        i.addEventListener(`change`, () => {
          const selectedCategories = Array.from(categories)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

          const hideFilter = document.querySelectorAll(`.product`);
          hideFilter.forEach((el) => {
            el.classList.add(`hidden`);
          });

          const filteredCategories = products.filter((product) => {
            const isInSelectedCategories = selectedCategories.includes(
              product.category
            );
            return isInSelectedCategories;
          });
          filteredCategories.forEach((product) => {
            const matchingProducts = document.querySelectorAll(
              `.product .img-grid-view[alt="${product.category}"]`
            );
            matchingProducts.forEach((el) => {
              el.closest(`.product`).classList.remove(`hidden`);
            });
          });

          if (selectedCategories.length === 0) {
            hideFilter.forEach((product) => {
              product.classList.remove(`hidden`);
            });
            // for showing when no checkboxes selected
            showing.innerHTML = `Showing: <strong>${products.length}</strong>`;
            return;
          }

          // for showing when some checkboxes selected
          showing.innerHTML = `Showing: <strong>${filteredCategories.length}</strong>`;
        });
      });

      ////////////////////
      //sort products by price or name
      const sortPriceLH = (a, b) => {
        return a.price - b.price;
      };
      const sortPriceHL = (a, b) => {
        return b.price - a.price;
      };
      const sortNameAZ = (a, b) => {
        const nameA = a.product;
        const nameB = b.product;
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      };
      const sortNameZA = (a, b) => {
        const nameA = a.product;
        const nameB = b.product;
        return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
      };

      sortLH.addEventListener(`click`, () => {
        console.table(products.sort(sortPriceLH));
      });
      sortHL.addEventListener(`click`, () => {
        console.table(products.sort(sortPriceHL));
      });
      sortAZ.addEventListener(`click`, () => {
        console.table(products.sort(sortNameAZ));
      });
      sortZA.addEventListener(`click`, () => {
        console.table(products.sort(sortNameZA));
      });

      ////////////////////////////////////////
    }); // then(data) Promise finishes ***
};
getProduct();
