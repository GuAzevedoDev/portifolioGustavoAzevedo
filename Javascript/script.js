let tema = document.getElementById("tema").addEventListener("click", alteraTema);
let body = document.body;

function alteraTema() {
  body.classList.toggle("ligth");
}

let temaMob = document
  .getElementById("temaMobile")
  .addEventListener("click", alteraTema);

function alteraTema() {
  body.classList.toggle("ligth");
}

const check = document.getElementById("check-mobile");
const btn = document.querySelector(".btn-baixo");

check.addEventListener("change", () => {
  if (check.checked) {
    btn.style.zIndex = "-1";
  } else {
    btn.style.zIndex = "2";
  }
});
const header = document.querySelector("#header");
const novaLargura = window.innerWidth;
window.addEventListener("wheel", function (event) {
  if (event.deltaY < 0 && novaLargura > 768) {
    header.classList.remove("desaparece-header");
  } else if (event.deltaY > 0 && novaLargura > 768) {
    header.classList.add("desaparece-header");
  }
});
