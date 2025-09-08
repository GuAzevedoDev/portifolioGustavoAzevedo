let tema = document
  .getElementById("tema")
  .addEventListener("click", alteraTema);
let body = document.body;

function alteraTema() {
  body.classList.toggle("ligth");
}
