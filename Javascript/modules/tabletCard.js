export default function initTabletCard() {
  const cardTablet = document.querySelector(".cardTablet");
  if (!cardTablet) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cardTablet.classList.add("active");
        } else {
          cardTablet.classList.remove("active");
        }
      });
    },
    {
      threshold: 0.4,
    },
  );

  if (window.innerWidth <= 768) {
    observer.observe(cardTablet);
  }
}
