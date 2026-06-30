export function initMobileMenu() {
  const body = document.body;

  const openBtn = document.querySelector(".header__toggle--open");
  const closeBtn = document.querySelector(".header__toggle--close");

  const menu = document.querySelector(".header__menu");
  const links = document.querySelectorAll(".header__link");

  if (!openBtn || !closeBtn || !menu) return;

  // Відкрити меню
  openBtn.addEventListener("click", () => {
    body.classList.add("menu-open");
  });

  // Закрити меню
  closeBtn.addEventListener("click", () => {
    body.classList.remove("menu-open");
  });

  // Закрити після кліку на пункт меню
  links.forEach(link => {
    link.addEventListener("click", () => {
      body.classList.remove("menu-open");
    });
  });

  // Закрити при переході на desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      body.classList.remove("menu-open");
    }
  });
}