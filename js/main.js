// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const headerInner = document.querySelector(".header-inner");

if (navToggle && headerInner) {
  navToggle.addEventListener("click", () => {
    const isOpen = headerInner.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      headerInner.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
