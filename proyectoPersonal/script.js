"use strict";

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
///////////// CREATE-DISPLAY PRODUCT /////////////

const productContainer = document.querySelector(`.product-wrapper`);
// const productPageContainer = document.querySelector(`.product-layout`);

function Product(cat, color, desc, cost, img, price, prod, stock) {
  this.category = cat;
  this.color = color;
  this.description = desc;
  this.cost = cost;
  this.image = img;
  this.price = price;
  this.product = prod;
  this.stock = stock;
}

const product4 = new Product(
  `pants`,
  [`navy`, `black`, `grey`],
  `some cool pants made by us with much love for you`,
  30,
  `th-750742328.png`,
  45,
  `cool loose pants`,
  10
);

const product5 = new Product(
  `shorts`,
  [`navy`, `black`, `red`, `orange`],
  `they can also be used as a swimsuit`,
  10,
  `th-1029833788.png`,
  18,
  `comfortable shorts`,
  60
);

const inventory = [];
inventory.push(product4, product5);

// function for displaying the products on the array on the index.html page
const displayProduct = () => {
  productContainer.innerHTML = ``;
  // productPageContainer.innerHTML = ``;

  for (let i = 0; i < inventory.length; i++) {
    const html = `
    <div class="product">
      <div class="product-display">
        <a href="">
          <img
          src="img/product_image/${inventory[i].image}"
          alt="${inventory[i].category}"
          />
        </a>
        <a href="#"><h4>${inventory[i].product}</h4></a>
        <h5>${inventory[i].description}</h5>
        <p>${inventory[i].price} €</p>
      </div>
    </div>
    `;

    productContainer.insertAdjacentHTML(`beforeend`, html);
    // productPageContainer.insertAdjacentHTML(`beforeend`, html);
  }
};
displayProduct();

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
