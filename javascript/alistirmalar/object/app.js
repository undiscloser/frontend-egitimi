// let arrayObj = [1, 2, 3];
// let obj1 = { obj: 1 };
// console.log("arrayObj", typeof arrayObj);
// console.log("obj1", typeof obj1);

// let item1 = new Object();
// let item2 = {};
// console.log("item1", typeof item1);
// console.log("item2", typeof item2);

// let item3 = {};
// let item4 = new Object();

// let xxx = Object.create(null);
// console.log(xxx);

// let yyy = Object.create(Object.prototype);
// console.log(yyy);

// let countriesTalkSpanish = {
//   continent: "South America",
//   language: "Spanish",
// };

// let uruguay = Object.create(countriesTalkSpanish);

// uruguay.capital = "Montevideo";

// console.log(uruguay);

// let laptop1 = {
//   brand: "Apple",
//   model: "MacBook Pro",
//   "2kg": 2,
//   model_name: "MAcbook PRO",
// };
// console.log(laptop1);
// console.log(laptop1.brand, laptop1["brand"]);
// console.log(laptop1.model, laptop1["model"]);
// console.log(laptop1["2kg"]);
// console.log(laptop1.model_name);

// laptop1.brand = "MAC";
// console.log(laptop1);
// laptop1.version = "10.15.7";
// console.log(laptop1);

// keys = Object.keys(laptop1);
// console.log(keys);
// console.log(Object.keys(laptop1));

// for (const key in keys) {
//   console.log(key);
// }

// keys.forEach((keyInfo) => {
//   console.log(keyInfo);
//   console.log(laptop1[keyInfo]);
// });

// let values = Object.values(laptop1);
// values.forEach((value) => {
//   console.log(value);
// });

// let show = {
//   x: 5,
//   y: 10,
// };

// var birey = {
//   isim: "Ali",
//   soyisim: "Veli",
//   dogumYili: 1985,
//   merhabaDe: (age) =>
//     `Merhaba, ben ${birey.isim} ${birey.soyisim}, ${age} yaşındayım`,
// };
// birey.yasHesapla = function () {
//   return 2022 - this.dogumYili;
// };
// console.log(birey.merhabaDe(birey.yasHesapla()));

// let user1 = {
//   firstName: "Bilgin",
//   lastName: "Uzman",
//   score: [1, 2, 3, 4],
//   isActive: true,
//   shortName: function () {
//     return `${this.firstName[0].toUpperCase()}. ${this.lastName}`;
//   },
// };
// console.log(user1);

let settings = {
  userName: "loremIpsum",
  password: "badPassword",
  isActive: true,
  ip: "127.0.0.1",
  serverName: "kodluyoruz.org",
};

// let userName = settings.userName;

// console.log(userName);

let { userName: user, password, isActive, ip: serverIp, serverName } = settings;
// console.log(userName, password, isActive, ip, serverName);
console.log(settings);
console.log(user, password, isActive, serverIp, serverName);

let {
  userName: userName2,
  password: pasword2,
  isActive: isActive2,
  ...newSettiings
} = settings;
console.log(newSettiings);

let person = { name: "Selin", city: "Ankara", favoriteColor: "aqua blue" };
let { name: foo } = person;
console.log(foo);
