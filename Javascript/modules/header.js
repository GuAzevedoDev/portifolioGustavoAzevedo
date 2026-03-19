export default function initHeader() {
  const header = document.querySelector(".header");
  if (header && window.innerWidth > 750) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        header.classList.add("desaparece-header");
      } else {
        header.classList.remove("desaparece-header");
      }
    });
  }
}
