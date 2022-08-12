// console.log("merhaba dünya");

// alert("merhaba dünnya");
// var degisken = "globalde var ile tanimlanan degisken";
// if (true) {
//   degisken = "var ile tanimlanan degiskenlere blocklardan erisilebilir";
// }
// console.log(degisken);

// function scope() {
//   var functionScopeDegisken = "Bu degisken function scope da tanimlidir";
//   if (true) {
//     var blocktaTanimliDegisken = "Bu degisken blockta tanimlidir";
//     functionScopeDegisken =
//       "Function scope da ki tanımlı degiskenlere o fonksiyonun blocklarından erişilebilir.";
//   }
//   console.log(blocktaTanimliDegisken);
// }
// scope();
// console.log(functionScopeDegisken);
// console.log(blocktaTanimliDegisken);

// var weLove = "Kodluyoruz";
// if (2 > 1) {
//   var weLove = "Bootcamp";
//   console.log(weLove);
// }
// console.log(weLove);

// let okulNumarasi = 414;
// if (true) {
//   let okulNumarasi = 245;
//   console.log("Ilk blockta ki deger: " + okulNumarasi);
//   if (true) {
//     let okulNumarasi = 312;
//     console.log("Ikinci blockta ki deger: " + okulNumarasi);
//   }
// }
// console.log("Global scopeta ki deger: " + okulNumarasi);

// const kullanici = {
//   isim: "Ahmet",
// };
// kullanici.isim = "Dila";
// console.log(kullanici.isim);

// const dizi = [1, 2, 3];
// dizi = [1, 2, 3, 4];
// console.log(dizi);

//1- Console ekraninda ne yazar inceleyelim.
// var myvar;
// console.log(myvar);
// myvar = "local value";

// yukarida ki ornegi adim adim aciklarsak
// var myvar = undefinded;
// console.log(myvar);
// myvar = 'local value';
// seklinde oldugu icin console ekraninda undefined degerinini goruruz.

// 2- Console ekraninda ne yazar inceleyelim.
// sayi1 = 100;
// console.log(sayi1 + " ve " + sayi2);
// var sayi2 = 200;
// var sayi1;

//Adim adim gidelim
// var sayi 2 = undefined
// var sayi 1 = undefined
// sayi 1 = 100;
// console.log(sayi1+ " ve "+sayi2)
//sayi 2= 200;
// sonuc olarak console ekraninda henuz sayi 2 degerine deger atanmadigi icin "100 ve undefined" degerini goruruz

// let a1;
// Boolean(a1);
// console.log(Boolean(a1));

// const b = "0";
// Boolean(b);
// console.log(Boolean(b));

// var x = 10 / "a";
// console.log(Boolean(x));

// var a = true;
// console.log(Boolean(a));

// var w = false || 0;
// console.log(Boolean(w));

// console.log(12 / "6");

// console.log(0 || (" 0" && {}));

// console.log(["a"] > null);

// let username = "hakan";
// const domain = "kodluyoruz.org";
// let email = username + "@" + domain;
// console.log(email);

// let info = `${username}....mail: ${email}
// mail uzunluk : ${email.length}`;
// console.log(info);

// const ad = `Aycan`;
// const soyad = `Yerdelen`;
// const gozRengi = `Kahverengi`;
// const yas = 21;
// const kisi = `<p>${ad}</p><p>${soyad}</p><p>${gozRengi}</p><p>${yas}</p>`;

// document.body.innerHTML = kisi;

// const kitap = {
//   ad: "Fırtına",
//   yazar: "Shakespeare",
//   tarih: 1610,
// };
// const bookTable = `
// <table border>
//     <tbody>
//         <tr>
//             <td>Kitap</td>
//             <td>${kitap.ad}</td>
//         </tr>
//             <tr><td>Yazar</td>
//             <td>${kitap.yazar}</td>
//         </tr>
//         <tr>
//             <td>Tarih</td>
//             <td>${kitap.tarih}</td>
//         </tr>
//     </tbody>
// </table>`;
// document.body.innerHTML = bookTable;

// let url = "www.kodluyoruz.org";
// let language = "Java";

// language = language.replace("Java", "Javascript");
// console.log(language);

// url = url.slice(url.indexOf(".") + 1);
// console.log(url);

// console.log(document.location);

// document.body.style.backgroundColor = "aqua";

// let x = document.getElementsByTagName("h2");

// let title = document.getElementById("title");
// console.log(title.innerHTML);

// let Link = document.querySelector("ul>li>a");
// // Link.innerHTML = "Link Bilgisi değişti";
// Link.innerHTML += " değişti";
// console.log(Link.innerHTML);

// let h1Dom = document.querySelector("#greeting");
// h1Dom.classList.add("text-primary");
// h1Dom.classList.add("title");
// h1Dom.classList.add("newClass", "ucuncuClass", "dorduncuClass");
// h1Dom.classList.remove("text-primary");
// console.log(h1Dom.classList);

// console.log(!!2);

// let username = prompt("Kullanıcı adını giriniz");

// if (username.length > 0) {
//   console.log(`Kullanıcı biligisi ${username}`);
// } else {
//   console.log(`Kullanıcı biligisi girseneeeee`);
// }

// let boolean;

// const isBooleanTrue = boolean ? true : false;

// console.log(isBooleanTrue) >> false;

// console.log(boolean);

// let age = 24;
// let permission = age >= 18 ? "Giriş yapabilirsiniz." : "Giriş yapamazsınız.";

// console.log(permission);

// let firstCity = "Ankara";

// let secondCity = "İstanbul";

// const isEqual =
//   firstCity === secondCity ? "İki şehir aynı" : "İki şehir aynı değil";

// console.log(isEqual);

// var money;
// var canBuy =
//   money < 17
//     ? "Satın alamazsın.."
//     : money > 30
//     ? "Satın alabilirsin.."
//     : "Para miktarını girmen gerekmektedir..";

// console.log(canBuy);

const smile = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`;

const notSmile = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`;

let examGrade = prompt("Puan Giriniz..");
let textInfo;
let info = document.querySelector("#info");

if (examGrade >= 0 && examGrade <= 100) {
  textInfo = smile;
  info.classList.add("text-primary");
  if (examGrade >= 90) {
    textInfo += " AA";
  } else if (examGrade >= 85) {
    textInfo += " BA";
  } else if (examGrade >= 80) {
    textInfo += " BB";
  } else if (examGrade >= 75) {
    textInfo += " CB";
  } else if (examGrade >= 70) {
    textInfo += " CC";
  } else if (examGrade >= 65) {
    textInfo += " DC";
  } else if (examGrade >= 60) {
    textInfo += " DD";
  } else if (examGrade >= 50) {
    textInfo += " FD";
  } else if (examGrade < 50) {
    textInfo = `${notSmile} FF`;
    info.classList.remove("text-primary");
    info.classList.add("text-danger");
  }
} else {
  textInfo = "Bilgiler doğru değil";
}
info.innerHTML = `${textInfo} => ${examGrade}`;
