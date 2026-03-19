export default function initMobileMenu() {
  const links = document.querySelectorAll(".nav-mobile .header-item a");
  const menuMobile = document.getElementById("check-mobile");

  if (!menuMobile) return;

  links.forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(() => {
        menuMobile.checked = false;
      }, 300);
    });
  });
}
