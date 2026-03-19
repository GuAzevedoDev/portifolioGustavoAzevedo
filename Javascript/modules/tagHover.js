export default function initTagHover() {
  document.querySelectorAll(".tag-html").forEach((tag) => {
    tag.addEventListener("mousemove", (e) => {
      const rect = tag.getBoundingClientRect();
      const x = 100 - ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      tag.style.setProperty("--x", `${x}%`);
      tag.style.setProperty("--y", `${y}%`);
      tag.style.opacity = 0.3;
    });

    tag.addEventListener("mouseleave", () => {
      tag.style.opacity = 0.08;
    });
  });
}
