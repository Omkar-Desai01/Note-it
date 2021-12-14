const btn = document.querySelector("#addBtn");
const title = document.querySelector("#noteTitle");
const dis = document.querySelector("#noteDiscription");
const form = document.querySelector("#form");
let cards = [];

form.addEventListener("submit", submitHandler);

function submitHandler(e) {
  e.preventDefault();

  const card = `
    <div class="card" >
    <h2>${e.target[0].value}</h2>
    <p>${e.target[1].value}</p>
    <button class='delead'id=${cards.length}>DEL</button>
    </div>
`;

  cards.unshift(card);
  rerender();
  document.querySelector("#mainCard").innerHTML = cards;
  document.querySelectorAll(".delead").forEach((a) => {
    a.addEventListener("click", delHandler);
  });
}
function delHandler(e) {
  console.log(e.target.id);
  cards = cards.filter(function (item, i) {
    return i != e.target.id;
  });
  rerender();
  document.querySelectorAll(".delead").forEach((a) => {
    a.addEventListener("click", delHandler);
  });
}
function rerender() {
  document.querySelector("#mainCard").innerHTML = cards;
  title.value = "";
  dis.value = "";
}
