"use strict";

const burgerMenu = document.getElementById("myLinks");

function openBurgerMenu() {
  if (burgerMenu.style.display === "block") {
    burgerMenu.style.display = "none";
  } else {
    burgerMenu.style.display = "block";
  }
}

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// const prod = {
//   prodName: `Alpargatas NIKE`,
//   price: 80,
//   available: true,
// };

// const isInStock = function () {
//   if (prod.available === true) return `available`;
//   else return `not available`;
// };
// const stock = isInStock();

// console.log(
//   `The product's name is ${prod.prodName}, with a price of ${prod.price} € and it's ${stock} right now`
// );

// prod.img = `img.jpg`;
// delete prod.img;

// prod.category = `shoes`;

// const { category } = prod;

// Object.freeze(prod);

// // prod.size = 42;

// console.log(Object.isFrozen(prod));

// // prod.available = false;

// const measure = {
//   length: 20,
//   width: 10,
//   height: 15,
//   weight: 25,
// };

// Object.seal(measure);
// console.log(Object.isSealed(measure));

// measure.width = 12;
// console.log(measure);

///////////////////////////////////
///////////////////////////////////
// arrays

// let nums = [23, 54, 89, 12, 25, 16, 63, 74];
// console.log(nums);
// console.log(`index [5]: ${nums[5]}`);
// nums.sort();
// console.log(nums, nums.length);
// console.table(nums);
// console.log(nums.indexOf(54));
// console.log(nums.includes(54));
