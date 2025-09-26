let tema = document
  .getElementById("tema")
  .addEventListener("click", alteraTema);
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

window.addEventListener('wheel', function(event) {
  if (event.deltaY < 0) {
      console.log('Rolando para cima com mouse');
  } else if (event.deltaY > 0) {
      console.log('Rolando para baixo com mouse');
  }
});
