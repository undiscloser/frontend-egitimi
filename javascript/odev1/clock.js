let isim = prompt("İsminizi Giriniz!");
let myName = document.querySelector("#myName");
myName.innerHTML = `${isim.toUpperCase()}`;

function tarihSaat() {
  const d = new Date();
  let text = d.toLocaleString();
  document.getElementById("myClock").innerHTML = text;
}
setInterval(tarihSaat, 1000);
