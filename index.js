const btn = document.querySelector("#addBtn");
const title = document.querySelector("#noteTitle");
const dis = document.querySelector("#noteDiscription");
const form = document.querySelector("#form");

form.addEventListener("submit", submitHandler);

function submitHandler(e) {
  e.preventDefault();
  console.log(e.target[0].value);
  console.log(e.target[1].value);
}
