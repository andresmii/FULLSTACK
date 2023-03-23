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

//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////

// const obj = {
//   str: `string`,
//   num: 123,
//   bool: true,
// };
// obj.arr = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];
// const { str, num, bool, arr } = obj;
// console.log(str, num, bool, arr);

/////////////
/////////////
/////////////

// let a = 99;
// let b = 5;
// let c = 12;

// const ex6 = {};

// ex6.a = a;
// ex6.b = b;
// ex6.c = c;

// console.log(ex6);

////////////////
////////////////
////////////////

// let nums = [23, 54, 89, 12, 25, 16, 63, 74];
// nums.push(45);
// console.log(nums);

// const season = [`summer`];
// season.unshift(`spring`);
// season.push(`fall`, `winter`);
// console.log(season);

//////////
//////////
//////////

// const cart = [
//   { name: `shirt`, price: 30 },
//   { name: `t-shirt`, price: 15 },
//   { name: `shoes`, price: 85 },
//   { name: `jacket`, price: 100 },
// ];
// console.table(cart);

////////////
////////////
////////////

// const months = [
//   `jan`,
//   `feb`,
//   `mar`,
//   `apr`,
//   `may`,
//   `jun`,
//   `jul`,
//   `aug`,
//   `sep`,
//   `oct`,
//   `nov`,
//   `dec`,
// ];
// months.forEach((x) => console.log(x));
// console.log(months.includes(`feb`));

///////////////////
///////////////////
///////////////////

// console.log(`sum`);
// const sum = (a, b) => console.log(a + b);
// sum(45, 23);
// sum(86, 15);
// sum(2, 56);

// console.log(`doblar`);
// const doblar = (n) => console.log(n * 2);
// doblar(5);
// doblar(9);
// doblar(10);

/////////////////
/////////////////
/////////////////

// const n1 = 23;
// console.log(typeof n1.toString(), n1.toString());
// const n2 = `23`;
// console.log(typeof parseInt(n2), parseInt(n2));

////////////////////
////////////////////
////////////////////

// const tweetLength = function (tweet) {
//   tweet.length <= 140
//     ? console.log(
//         `tweet is ${tweet.length} characters, which fits the desired length`
//       )
//     : console.log(
//         `tweet is ${tweet.length} characters, which exceeds the desired length`
//       );

//   // if (tweet.length <= 140) {
//   //   console.log(
//   //     `tweet is ${tweet.length} characters, which fits the desired length`
//   //   );
//   // } else {
//   //   console.log(
//   //     `tweet is ${tweet.length} characters, which exceeds the desired length`
//   //   );
//   // }
// };
// tweetLength(`this is a string less than 140 characters.`);
// tweetLength(
//   `this is a string that we want to make longer than 140 characters, so we are going to write words until it reaches the desired length, i still don't know if it is long enough so we are going to keep writing a little bit more, maybe now we have enough characters.`
// );

/////////////////
/////////////////
/////////////////

// const searchWord = function (text, word) {
//   console.log(
//     `it is ${text.includes(
//       word
//     )} that the following text includes the word ${word}`
//   );
// };
// searchWord(
//   `Ilkay Gundogan: "Our fans are always amazing. Home and away, they are always with us. They can really play their part on Tuesday night. In a close game, they can be the decisive factor..."`,
//   `decisive`
// );
// searchWord(
//   `Ilkay Gundogan: "Our fans are always amazing. Home and away, they are always with us. They can really play their part on Tuesday night. In a close game, they can be the decisive factor..."`,
//   `wonderful`
// );

//////////////
//////////////
//////////////

// let nums = [1, 2, 3, 4, 5, 6, 7, 8];

// const addValue = function (arr, val) {
//   arr.push(val);
//   console.log(arr);
// };
// addValue(nums, `yes`);
// addValue(months, `yes`);
// addValue([1, 2, 3, 4, 5], `yes`);

//////////////
//////////////
//////////////

// const ecuacion2do = function (a, b, c) {
//   let x = (-b + Math.sqrt(Math.exp(b) - 4 * a * c)) / (2 * a);
//   let y = (-b - Math.sqrt(Math.exp(b) - 4 * a * c)) / (2 * a);

//   x >= 0 ? console.log(x) : console.log(y);
// };
// ecuacion2do(8, 5, 2);
// ecuacion2do(3, 9, 1);
// ecuacion2do(5, 8, 10);
// ecuacion2do(5, 5, 5);

////////////////
////////////////
////////////////

// const div = (a, b) => {
//   return a / b;
// };
// const resultado = div(5, 8);
// console.log(resultado);

/////////////////
/////////////////
/////////////////

// let total = 0;

// const addCart = (price) => {
//   return (total += price);
// };
// total = addCart(25);
// total = addCart(99);
// total = addCart(49);
// total = addCart(12);
// total = addCart(45);
// total = addCart(67);
// console.log(total);

// const tax = 0.21;

// const totalPrice = function (subtotal) {
//   return (tax + 1) * subtotal;
// };
// console.log(totalPrice(total));

////////////////
////////////////
////////////////

// const mySpotify = {
//   nowPlaying: (id) => console.log(`now playing ${id}`),
//   pause: () => console.log(`song paused`),
//   createPlaylist: (name) => console.log(`creating playlist ${name}`),
// };
// mySpotify.nowPlaying(`"la cucaracha"`);
// mySpotify.pause();
// mySpotify.createPlaylist(`"para limpiar🧹"`);

// mySpotify.deleteSong = (song) => console.log(`song ${song} deleted`);
// mySpotify.deleteSong(`"la macarena"`);

/////////////////
/////////////////
/////////////////

// const fullName = (first, last) => {
//   const space = ` `;
//   return first.concat(space, last);

//   // return first + ` ` + last;
// };
// console.log(fullName(`andres`, `leon`));
// console.log(fullName(`jose`, `gonzalez`));

//////////////////////
//////////////////////
//////////////////////

// arrow fns

// let triple = function (n = 1) {
//   console.log(n * 3);
// };
// triple();
// triple(3);
// triple(14);
// triple(9);

// let triple2 = (n = 1) => console.log(n * 3);
// triple();
// triple2(3);
// triple2(14);
// triple2(9);

/////////////////////
/////////////////////
/////////////////////

// const cart = [
//   { name: `shirt`, cost: 30, units: 50 },
//   { name: `t-shirt`, cost: 15, units: 15 },
//   { name: `shoes`, cost: 85, units: 12 },
//   { name: `jacket`, cost: 100, units: 2 },
//   { name: `scarf`, cost: 5, units: 36 },
//   { name: `tuxedo`, cost: 170, units: 0 },
//   { name: `cap`, cost: 20, units: 40 },
//   { name: `sunglasses`, cost: 120, units: 15 },
//   { name: `pants`, cost: 40, units: 23 },
//   { name: `dress`, cost: 50, units: 15 },
//   { name: `shorts`, cost: 10, units: 8 },
//   { name: `coat`, cost: 300, units: 3 },
// ];

// cart.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

// console.table(cart);

// let inStock = 0;
// inStock = cart.some((prod) => {
//   return prod.name === `cap` && prod.units > 0;
// }, 0);
// console.log(inStock);

// // low stock items
// let lowStock = cart.filter((unit) => {
//   return unit.units <= 3;
// });
// console.log(lowStock);

// // inventory value by adding up the product of the costs by every unit of every item
// let inventoryValue = cart.reduce((total, i) => {
//   return total + i.cost * i.units;
// }, 0);
// console.log(inventoryValue);

////////////////////
////////////////////
////////////////////

// const atm = (pin, amount) => {
//   if (pin === 1234 && amount <= 49) {
//     console.log(`successful`);
//   } else if (pin === 1234 && amount > 49) {
//     console.log(`insufficient funds`);
//   } else if (pin !== 1234 && amount <= 49) {
//     console.log(`wrong pin`);
//   } else console.log(`wrong pin & insufficient funds`);
// };
// atm(5569, 49);
// atm(5569, 78);
// atm(1234, 59);
// atm(1234, 45);

///////////////////
///////////////////

// let pay = ``;

// switch (pay) {
//   case `cash`:
//     console.log(`payed with cash`);
//     break;
//   case `credit`:
//     console.log(`payed with credit`);
//     break;
//   case `crypto`:
//     console.log(`payed with crypto`);
//     break;
//   case `debit`:
//     console.log(`payed with debit`);
//     break;
//   default:
//     console.log(`haven't payed`);
//     break;
// }

//////////////////////
//////////////////////
//////////////////////

// let ten = (a, b) => {
//   return 10 * (a + b);
// };
// console.log(ten(5, 2));
// console.log(ten(3, 3));

// // length of two strings together
// let strings = (str, str2) => {
//   return str.concat(str2).length;
// };
// console.log(strings(`123456789 1234567890`, `1234567890`));
// console.log(strings(`1234567890`, `1234567890`));

// let numRange = (a) => {
//   if (a * a <= 100) console.log(`lower to 100`);
//   else if (a * a <= 200) console.log(`lower to 200`);
//   else console.log(`too high`);
// };
// numRange(5);
// numRange(12);
// numRange(15);

//////////////////

// let target = (a) => a + 10;

// switch (target(2)) {
//   case 9:
//     console.log(`equal 9`);
//     break;
//   case 12:
//     console.log(`equal 12`);
//     break;
//   case 15:
//     console.log(`equal 15`);
//     break;
//   case 20:
//     console.log(`equal 20`);
//     break;
//   case 45:
//     console.log(`equal 45`);
//     break;
//   default:
//     console.log(`none`);
//     break;
// }

////////////////
////////////////
////////////////

// for loop
// for (let i = 1; i <= 500; i++) {
//   console.log(i);
// }

// for (let i = 100; i >= 0; i -= 5) {
//   console.log(i);
// }

// const cart = [
//   { name: `shirt`, cost: 30, units: 50 },
//   { name: `t-shirt`, cost: 15, units: 15 },
//   { name: `shoes`, cost: 85, units: 12 },
//   { name: `jacket`, cost: 100, units: 2 },
//   { name: `scarf`, cost: 5, units: 36 },
//   { name: `tuxedo`, cost: 370, units: 0 },
//   { name: `cap`, cost: 20, units: 40 },
//   { name: `sunglasses`, cost: 120, units: 15 },
//   { name: `pants`, cost: 40, units: 23 },
//   { name: `dress`, cost: 50, units: 15 },
//   { name: `shorts`, cost: 10, units: 8 },
//   { name: `coat`, cost: 225, units: 3 },
// ];
// cart.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
// console.table(cart);

// for (let i = 0; i < cart.length; i++) {
//   console.log(
//     `the ${cart[i].name} costs ${cart[i].cost}€ and there are ${cart[i].units} units in stock`
//   );
// }

///////////
///////////
// while loop

// let i = 0;

// while (i < cart.length) {
//   console.log(
//     `the ${cart[i].name} cost is ${cart[i].cost}€ and there are ${cart[i].units} units in stock`
//   );
//   i++;
// }

////////////
////////////
// do while

// let i = 0;

// do {
//   console.log(
//     `the ${cart[i].name} cost is ${cart[i].cost}€ and there are ${cart[i].units} units in stock`
//   );
//   i++;
// } while (i < cart.length);

//////////////////////
//////////////////////

// // even numbers between two numbers
// let n = 0;
// while (n <= 20) {
//   if (n % 2 === 0 && n >= 1) {
//     console.log(n);
//   }
//   n++;
// }

//////////////

// let number = (n) => {
//   n > 0
//     ? console.log(`positive`)
//     : n === 0
//     ? console.log(`zero`)
//     : console.log(`negative`);
// };
// number(5);
// number(0);
// number(-2);

// let a = (n) => {
//   for (let i = n; i > n.length; i--) {
//     console.log(i);
//   }
// };
// a(20);

// let a = (n) => {
//   while (n >= 0) {
//     console.log(n);
//     n--;
//   }
// };
// a(10);

////////////////

// // sum of numbers between 0 and x number
// let res = 0;
// let x = (n) => {
//   while (n >= 0) {
//     res = n + res;
//     n--;
//   }
//   console.log(res);
// };
// x(10);

// // another way to do it
// let res = 0;
// let i = 0;
// let x = (n) => {
//   while (n >= i) {
//     res += i;
//     i++;
//   }
//   console.log(res);
// };
// x(10);

////////////////////

// // regression but showing n / 10
// let a = (n) => {
//   while (n >= 0) {
//     console.log(n / 10);
//     n--;
//   }
// };
// a(10);

///////////////////

// // calc avg
// let accum = 0;
// let avg = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     accum += arr[i];
//   }
//   console.log(`${accum} / ${arr.length} = ${(accum / arr.length).toFixed(2)}`);
// };
// avg([16, 18, 15, 19, 14, 10, 8, 20, 12, 10, 12, 16]);

//////////////////////

// // add up the odds between two given numbers
// // ex: a = 0 / b = 10 / odds = [1, 3, 5, 7, 9] / sumOdds = 1 + 3 + 5 + 7 + 9 = 25
// let sum = (a, b) => {
//   let acc = 0;
//   for (let i = a; i <= b; i++) {
//     if (i % 2 === 1) {
//       acc += i;
//     }
//   }
//   console.log(acc);
// };
// sum(0, 10);

////////////////////
////////////////////

// // get an array of grades, take the average and say if its approved or suspended

/////////////////////////

// // depending on which month say how many days it has
// const monthObj = (month, days) => {
//   return {
//     month,
//     days,
//   };
// };

// let jan = monthObj(`jan`, 31);
// let feb = monthObj(`feb`, 28);
// let mar = monthObj(`mar`, 31);
// let apr = monthObj(`apr`, 30);
// let may = monthObj(`may`, 31);
// let jun = monthObj(`jun`, 30);
// let jul = monthObj(`jul`, 31);
// let aug = monthObj(`aug`, 31);
// let sep = monthObj(`sep`, 30);
// let oct = monthObj(`oct`, 31);
// let nov = monthObj(`nov`, 30);
// let dec = monthObj(`dec`, 31);

// let months = [];
// months.push(jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec);

// months.forEach((m) => {
//   console.log(`${m.month} has ${m.days} days`);
// });

// /////////////

// const cart = [
//   { name: `shirt`, cost: 30, units: 50 },
//   { name: `t-shirt`, cost: 15, units: 15 },
//   { name: `shoes`, cost: 85, units: 12 },
//   { name: `jacket`, cost: 100, units: 2 },
//   { name: `scarf`, cost: 5, units: 36 },
//   { name: `tuxedo`, cost: 170, units: 0 },
//   { name: `cap`, cost: 20, units: 40 },
//   { name: `sunglasses`, cost: 120, units: 15 },
//   { name: `pants`, cost: 40, units: 23 },
//   { name: `dress`, cost: 50, units: 15 },
//   { name: `shorts`, cost: 10, units: 8 },
//   { name: `coat`, cost: 300, units: 3 },
// ];

// cart.forEach((n) => {
//   console.log(n.name);
// });

// const arrMap = cart.map((p) => p.name);
// console.log(arrMap);

/////////////////////
/////////////////////

// let res = {
//   name: `john`,
//   lastName: `doe`,
//   total: 25,
//   payed: 28,
// };

// res.message = function () {
//   console.log(
//     `the reservation for ${res.name} ${res.lastName} costed $${res.total} and payed $${res.payed}`
//   );
// };
// res.message();

// let date = {
//   y: 2030,
//   m: 3,
//   d: 21,
//   daysUntilMonthEnds: function () {
//     console.log(
//       `${11 - this.m} months and ${31 - this.d} days until the end of the month`
//     );
//   },
// };
// date.daysUntilMonthEnds();

///////////////////////////
///////////////////////////

// object oriented programming
////////////////////

// by creating a class constructor, objects can be created from existing parameters of the declarated constructor. using the `this` keyword helps to define the properties of the objects and then using the "new ClassName(value1, value2)" the values can be added to the new products

// function Fecha(a, m, d) {
//   this.year = a;
//   this.month = m;
//   this.day = d;
// }

// const myBirthday = new Fecha(1994, 2, 24);
// const today = new Fecha(2023, 3, 21);
// const todayInOneYear = new Fecha(2024, 3, 21);
// console.log(myBirthday, today, todayInOneYear);

// /////////////////////

// function Producto(name, price) {
//   this.name = name;
//   this.price = price;
// }

// Producto.prototype.formatProd = function () {
//   console.log(`the product ${this.name} has a price of ${this.price}€`);
// };

// const prod = new Producto(`laptop`, 1200);
// console.log(prod);
// prod.formatProd(); // to call the "new function property" a new variable has to be created, then the "function property" will be called // if the element is not declared as a variable it will only read the previoulsy constructed properties // INVESTIGATE ABOUT THIS

// console.log(new Producto(`keyboard`, 95));
// console.log(new Producto(`mouse`, 20));
// console.log(new Producto(`chair`, 160));

//// other way
// create a class object and using the `constructor()` the object properties will be created by using the `this` keyword. after doing it, the "new ClassName(value1, value2)" can be called by inserting the arguments

// class Producto2 {
//   constructor(n, p) {
//     this.name = n;
//     this.price = p;
//   }

//   formatProd2() {
//     console.log(`the product ${this.name} has a price of ${this.price}€`);
//   }
// }
// console.log(new Producto2(`desk`, 300));

////////////////////////
////////////////////////
////////////////////////

// class Book {
//   constructor(n, p, i) {
//     this.name = n;
//     this.price = p;
//     this.isbn = i;
//   }
// }
// console.log(new Book(`1984`, 11, 123456));

// // extends is used for getting info from a previous class
// class Category extends Book {
//   constructor(n, p, i, c) {
//     super(n, p, i); // copying the properties from the class previuosly created
//     this.category = c;
//   }
//   formatCategory() {
//     console.log(
//       `the book ${this.name} belongs to the category ${this.category}`
//     );
//   }
// }
// const abc = new Category(`the bible`, 25, 987654, `religion`);
// console.log(abc, abc.formatCategory());

// console.log(new Category(`jungle book`, 15, 456789, `children`));
// // note how the previous class `Book` has three properties that are getting copied into the new class `Category`. it's possible to only select the ones we want

// ///////////////////
// ///// create new object named Car with properties: brand, year, motor, licensePlate, fn(years of the car)
// const thisYear = new Date().getFullYear();
// class Car {
//   constructor(b, y, m, l) {
//     this.brand = b;
//     this.purchaseYear = y;
//     this.motor = m;
//     this.licensePlate = l;
//   }
//   formatCar() {
//     console.log(
//       `the car ${this.brand} was bought ${
//         thisYear - this.purchaseYear
//       } years ago`
//     );
//   }
// }
// const myCar = new Car(`Toyota Corolla`, 2012, `V6`, `VAR-21B`);
// console.log(myCar, myCar.formatCar());
// const dadsCar = new Car(`Pagani Huayra`, 2021, `V8`, `FAR-25P`);
// console.log(dadsCar, dadsCar.formatCar());

//////////////////////
//////////////////////
//////////////////////
//////////////////////

// // try catch

// const n1 = 23;
// const n3 = 45;
// console.log(n1);
// try {
//   console.log(n2);
// } catch (error) {
//   console.log(n3);
// }

// //////////////////////
// //////////////////////
// //////////////////////
// //////////////////////

// // promises
// const authUser = new Promise((resolve, reject) => {
//   const auth = true;

//   auth ? resolve(`yes`) : reject(`no`);
// });
// console.log(authUser);

// authUser
//   .then((result) => console.log(result))
//   .catch((result) => console.log(result));

/////////////////////
/////////////////////
/////////////////////

/* <button id="button" type="button">press</button> */

// const btnPress = document.querySelector(`#button`);
// btnPress.addEventListener(`click`, (e) => {
//   e.preventDefault();
//   console.log(`clicked`);
//   Notification.requestPermission().then((result) =>
//     console.log(`result is ${result}`)
//   );
// });

// if (Notification.permission == `granted`) {
//   new Notification(`new notification`);
// }

////////////////////////
////////////////////////
////////////////////////

// setTimeout(() => {
//   console.log(`hello world!`);
// }, 5000);

// setInterval(() => {
//   console.log(`hello world!`);
// }, 3000);

// // create a promise and call it with an `async` after a certain time (5s) passes
// const newClientDownload = () => {
//   return new Promise((resolve) => {
//     console.log(`downloading clients... please wait🙏🏼`);

//     setTimeout(() => {
//       resolve(`clients downloaded✅`);
//     }, 5000);
//   });
// };

// async function app() {
//   const resultAsync = await newClientDownload();
//   console.log(resultAsync);
// }
// app();

// // logging into console results directly
// const downloadOrders = () => {
//   return new Promise(() => {
//     console.log(`downloading orders... please wait🙏🏼`);

//     setTimeout(() => {
//       console.log(`orders downloaded✅`);
//     }, 8000);
//   });
// };
// downloadOrders();

/////////////////////////
/////////////////////////
/////////////////////////

// fetching API
const getEmployees = () => {
  fetch(`data.json`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const { employees } = data;
      employees.forEach((emp) => {
        console.log(`the employee ${emp.name} works as ${emp.position}`);
      }); // use destructuring to get a specific property
    });
};
getEmployees();

async function getEmployees2() {
  const res = await fetch(`data.json`);
  const data = await res.json();
  console.log(data);

  const { employees } = data;
  employees.forEach((emp) => {
    console.log(`the employee ${emp.name} works as ${emp.position}`);
  });
}
getEmployees2();
