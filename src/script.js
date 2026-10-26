
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  const navLinks = document.querySelectorAll(".main-nav a");
  const yearElement = document.querySelector("#current-year");

  // Автоматическое обновление года в подвале сайта
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Открытие и закрытие мобильного меню
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Закрыть меню" : "Открыть меню"
      );

      document.body.classList.toggle("menu-open", isOpen);
    });

    // Закрытие меню после перехода по ссылке
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Открыть меню");
        document.body.classList.remove("menu-open");
      });
    });

    // Закрытие меню клавишей Escape
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Открыть меню");
        document.body.classList.remove("menu-open");
      }
    });
  }
});
