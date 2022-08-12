// function hello() {
//   console.log("merhaba");
// }
// hello();

// function c1(firstName, lastName) {
//   let info = `Merhaba ${firstName} ${lastName}`;
//   return info;
// }
// let greetInfo = c1("Ad", "Soyad");
// console.log(greetInfo);

// function domId(id, info) {
//   let domObj = document.querySelector(`#${id}`);
//   domObj.innerHTML = info;
// }

// let htmlInfo = `<span style="color:red">Color REDDD</span> `;
// domId("greeting", htmlInfo);

// function Question(hobby) {
//   switch (hobby) {
//     case "car":
//       return function (name) {
//         console.log(name + " do you have a car ?");
//       };
//       break;

//     case "book":
//       return function (name) {
//         console.log(name + " what is your favorite author?");
//       };
//       break;

//     case "software":
//       return function (name, type) {
//         console.log(name + " are you interested in " + type + "?");
//       };
//       break;

//     default:
//       return function (name) {
//         console.log(name + "  how are you ?");
//       };
//       break;
//   }
// }

// var softwareQuestion = Question("software");
// softwareQuestion("Cemre", "nodejs");

// function factoriyel(n) {
//   if (n == 0) {
//     return 1;
//   } else {
//     return n * factoriyel(n - 1);
//   }
// }

// console.log(factoriyel(5));

// let greeting = document.querySelector("#greeting");
// greeting.addEventListener("onclick", domClick);
// function domClick() {
//   console.log("tıklandı");
//   this.style.color == "red"
//     ? (this.style.color = "black")
//     : (this.style.color = "red");
// }

// const color = document.querySelector("#select");
// color.addEventListener("change", selectBox);
// function selectBox(event) {
//   console.log("Etkinlik tipi : " + event.type);
//   console.log("deger : " + event.target.value);
// }

// const selectBox2 = document.querySelector("#selectColor");
// const button = document.querySelector("#button");
// const form = document.querySelector(".inputText");
// const cerceve = document.querySelector(".container");
// selectBox2.addEventListener("click", function () {
//   console.log("selectBox2");
// });
// form.addEventListener("click", function () {
//   console.log("form");
// });
// cerceve.addEventListener("click", function () {
//   console.log("cerceve");
// });

// let counter = localStorage.getItem("counter")
//   ? Number(localStorage.getItem("counter"))
//   : 0;
// let counterDOm = document.querySelector("#counter");
// let increaseDOM = document.querySelector("#increase");
// let decreaseDOM = document.querySelector("#decrease");

// counterDOm.innerHTML = counter;
// increaseDOM.addEventListener("click", clickEvent);
// decreaseDOM.addEventListener("click", clickEvent);

// function clickEvent() {
//   this.id == "increase" ? (counter += 1) : (counter -= 1);
//   localStorage.setItem("counter", counter);
//   counterDOm.innerHTML = counter;
// }

let formDOM = document.querySelector("#userForm");
formDOM.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  console.log("işlem gerçekleşti");
  let scoreInputDOM = document.querySelector("#score");
  console.log(scoreInputDOM.value);
  localStorage.setItem("score", scoreInputDOM.value);
}
