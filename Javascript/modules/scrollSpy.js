export default function initScrollSpy() {
  const navLinks = document.querySelectorAll(".header-item");

  const sections = Array.from(navLinks)
    .map((link) => {
      const href = link.querySelector("a").getAttribute("href");
      if (href.startsWith("#")) {
        return document.querySelector(href);
      }
      return null;
    })
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            const href = link.querySelector("a").getAttribute("href");
            link.classList.toggle(
              "active-link",
              href === `#${entry.target.id}`,
            );
          });
        }
      });
    },
    {
      rootMargin: "-100px 0px -40% 0px",
      threshold: 0,
    },
  );

  sections.forEach((section) => observer.observe(section));
}
