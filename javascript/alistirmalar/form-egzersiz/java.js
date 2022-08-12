let userFormDOM = document.querySelector("#userForm");
userFormDOM.addEventListener("submit", formHandler);
7;

let alertDOM = document.querySelector("#uyar");

const alertFunction = (
  title,
  message,
  className = "danger"
) => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong>${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

function formHandler(event) {
  event.preventDefault();
  const USER_NAME = document.querySelector("#username");
  const SCORE = document.querySelector("#score");

  if (USER_NAME.value && SCORE.value) {
    addItem(USER_NAME.value, SCORE.value);
    USER_NAME.value = "";
    SCORE.value = "";
  } else {
    alertDOM.innerHTML = alertFunction(
      "Başlık Bilgisi ",
      "Hatalı giriş yaptınız.",
      "success"
    );
    console.log("Hatalı giriş yaptınız.");
  }
}

let userListDOM = document.querySelector("#userList");

const addItem = (userName, score) => {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `
  ${userName}
  <span class="badge bg-primary rounded-pill">${score}</span>`;
  liDOM.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  userListDOM.append(liDOM);
};

const userForm2 = document.querySelector("#userForm2");
const userName2 = document.querySelector("#username2");
const userSurname2 = document.querySelector("#usersurname2");
const userAge2 = document.querySelector("#score2");
const userList2 = document.querySelector("#userList2");

const submitHandler = (e) => {
  e.preventDefault();
  if (userName2.value && userSurname2.value && userAge2.value >= 18) {
    showInfos(userName2.value, userSurname2.value, userAge2.value);
    userName2.value = "";
    userSurname2.value = "";
    userAge2.value = null;
  } else {
    alert("Lütfen tekrar giriş yapınız.");
  }
};
const showInfos = (userName2, userSurname2, userAge2) => {
  const liDOM2 = document.createElement("li");
  liDOM2.innerHTML = `Your İnformation: ${userName2} ${userSurname2} ${userAge2}`;
  liDOM2.classList.add(".userList2");
  userList2.append(liDOM2);
  if (userList2.firstChild) {
    userList2.style.display = "flex";
  }
};
userForm2.addEventListener("submit", submitHandler);
