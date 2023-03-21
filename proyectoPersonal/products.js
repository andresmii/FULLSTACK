"use strict";

const productPageContainer = document.querySelector(`.product-layout`);

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

const product1 = new Product(
  `t shirt`,
  `black`,
  `a cool black oversized t shirt`,
  10,
  `194942208706-1_1280x.png`,
  20,
  `oversized t shirt`,
  50
);

const product2 = new Product(
  `sweatshirt`,
  [`navy`, `black`, `pearl white`, `yellow`, `gray`],
  `the comfiest hoodie you can have`,
  23,
  `194942208706-2_1280x.png`,
  40,
  `oversized hoodie`,
  20
);

const product3 = new Product(
  `sweatshirt`,
  [`black`, `white`, `gray`, `burgundy`],
  `i can't promise your gf is not going to steal you this one`,
  20,
  `th-198647226.png`,
  30,
  `oversized sweatshirt`,
  20
);

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
inventory.push(product1, product2, product3, product4, product5);

// function for displaying the products on the array on the index.html page
const displayProduct = () => {
  productPageContainer.innerHTML = ``;

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

    productPageContainer.insertAdjacentHTML(`beforeend`, html);
  }
};
displayProduct();
