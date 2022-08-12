// let domain = "kodluyoruz";
// let isActive = false;
// let items = [1, 2, 3, isActive, domain];

// console.log(items);

// let emptyArray = [];

// console.log(items.length);

// // document.querySelector("#info").innerHTML = items.length;

// console.log(items[0]);

// console.log(items[items.length - 1]);

// console.log(typeof items);
// console.log(Array.isArray(items));

// console.log("[ ] : ", Array.isArray([]));

// console.log("1 : ", Array.isArray(1));

// console.log("true : ", Array.isArray(true));

// console.log("ortadaki değer : ", items[Math.floor(items.length / 2)]);

// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

// items.forEach((item, index) => {
//   console.log(item, index);
// });

// let diziler = [1, 2, 3, 4, 5];
// let femaleUsers = ["ayşe", "hülya", "merve"];
// let maleUsers = ["ahmet", "hasan", "mehmet"];

// diziler.unshift(femaleUsers);
// console.log(diziler);

// diziler.push(maleUsers);
// console.log(diziler);

// let newDiziler = diziler.splice(1, 5);
// console.log("newDiziler: ", newDiziler);
// console.log("Diziler: ", diziler);

// diziler.unshift("lorem");
// diziler.push("ipsum");
// console.log(diziler.indexOf("ipsum"));

// let copyDiziler = diziler;
// console.log(diziler);
// copyDiziler.pop();
// console.log(copyDiziler);
// console.log(diziler);

// let x = [2, 5, 8, 11, 15, 17];

// let filtered = x.filter((num) => num > 10);
// console.log(filtered);

// let carpim = filtered.map(function (num) {
//   return num * 5;
// });
// console.log(carpim);

// let result = [3, 6, 9, 14, 16];

// function myFunction(result) {
//   result = result.filter((x) => x > 5);
//   console.log(" 5 den büyük sayılar ", result);
// }

// let users = ["lorem", "ipsum", "dolor"];
// let index = 0;
// for (; index < 10; index++) {
//   console.log(index);
// }

// const userListDOM = document.querySelector("#userList");

// for (let index = 0; index < users.length; index++) {
//   const liDOM = document.createElement("li");
//   liDOM.innerHTML = users[index];
//   userListDOM.appendChild(liDOM);

//   console.log(users[index]);
// }

// for (var i = 20; i < 40; i++) {
//   console.log(i);
// }

// for (var i = 0; i < 50; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

const lorem_ipsum = [
  "lorem",
  "ipsum",
  "dolor",
  "amet",
  "elit",
  "ismet",
  "necati",
];

let counter = 0;
// for (; counter < 10; counter++) {
//   if (counter === 5) {
//     break;
//   }
//   console.log(counter);
// }

// for (; counter < 10; counter++) {
//   if (counter === 5) {
//     continue;
//   }
//   console.log(counter);
// }

const UL_DOM = document.querySelector("#userList");

let index = 0;
// for (; index < lorem_ipsum.length; index++) {
//   if (lorem_ipsum[index] == "dolor") {
//     break;
//   }
//   let Lİ_DOM = document.createElement("li");
//   Lİ_DOM.innerHTML = lorem_ipsum[index];
//   UL_DOM.append(Lİ_DOM);
// }

// for (; index < lorem_ipsum.length; index++) {
//   if (lorem_ipsum[index] == "dolor") {
//     continue;
//   }
//   let Lİ_DOM = document.createElement("li");
//   Lİ_DOM.innerHTML = lorem_ipsum[index];
//   UL_DOM.append(Lİ_DOM);
// }

// for (var i = 0; i <= 10; i++) {
//   if (i % 2 == 0) console.log("dış döngü: " + i);
//   for (var j = 0; j <= 5; j++) {
//     if (j == 3) {
//       break;
//     }
//     console.log("iç döngü: " + j);
//   }
// }

// cikis_etiketi: for (var i = 0; i <= 5; i++) {
//   for (var j = 0; j <= 50; j++) {
//     if (j == 9) {
//       break cikis_etiketi;
//     }
//     console.log("iç döngüden j :" + j);
//   }
// }

// gec_etiketi: for (var i = 0; i <= 5; i++) {
//   for (var j = 0; j <= 4; j++) {
//     if (j == 2) {
//       continue gec_etiketi;
//     }
//     console.log("iç döngüden j :" + j);
//   }
// }

// var degisken = 1;

// while (degisken <= 10) {
//   console.log("degiskenin degeri: " + degisken);

//   degisken++;
// }

// var arabalar = ["mercedes", "bmw", "honda", "audi", "ferrari"];
// var i = 0;
// while (arabalar[i]) {
//   console.log(arabalar[i]);
//   i++;
// }

// const animals = ["cat", "dog", "bird", "horse"];

// animals.forEach((value, index, array) => {
//   console.log("value: ", value);
//   console.log("value parametresinin aldığı index :", index);
//   console.log("array:", array);
// });

// const animals2 = ["cat", "dog", "bird", "horse"];
// animals.forEach((animal3) => console.log(animal3));

// const numbers = [4, 11, 9];
// const newArray = [];
// numbers.forEach(function (numbers) {
//   newArray.push(numbers * 3);
// });
// console.log(newArray);

// const numbers5 = [12, 24, 36];
// const newList = [];
// numbers5.forEach((numbers5) => {
//   newList.push(numbers5 + 2);
// });
// console.log(newList);

// const numbers6 = [4, 11, 9];
// const newArray6 = [];
// numbers.forEach(function (numbers6) {
//   newArray6.push(numbers6 + 2);
// });
// console.log(newArray6);

// const PRODUCTS = [
//   "mic",
//   "cable",
//   "speaker",
//   "desktop pc",
//   "server",
//   "mouse",
//   "keyboard",
// ];

// const newProducts = PRODUCTS.filter((item) => item.length > 5);
// console.log(newProducts);

// const USERS = [
//   { fullName: "Ayşe sumer", isActive: false },
//   { fullName: "Ahmet urgan", isActive: true },
//   { fullName: "Asya basar", isActive: true },
//   { fullName: "Aksel durmaz", isActive: false },
// ];

// // const active_Users = USERS.filter((user) => user.isActive === false);
// const active_Users = USERS.filter((user) => user.isActive);
// console.log(active_Users);

const person = [
  {
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
  },
];

const buyuk = person.filter((yas) => yas.age > 30);
console.log(buyuk);

const kod = person.filter((kodx) => kodx.languages.includes("JavaScript"));
console.log(kod);

const userss = ["ayşe", "mehmet", "tutku", "aksel"];
const new_usersss = userss.map((u) => u.toUpperCase());
console.log(new_usersss);

// const usersss_obj = userss.map((x) => {
//   return {
//     userName: x,
//     shortName: `${x[0]}.`,
//     newName: `${x[0].toUpperCase()}${x.slice(1).toLowerCase()}`,
//   };
// });

const usersss_obj = userss.map((x) => ({
  userName: x,
  shortName: `${x[0]}.`,
  newName: `${x[0].toUpperCase()}${x.slice(1).toLowerCase()}`,
}));
console.log(usersss_obj);
