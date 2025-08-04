const openMenu = document.querySelector(".nav__btn");
const navBar = document.querySelector(".nav__menu");
const navItem = document.querySelectorAll(".nav__link");

openMenu.addEventListener("click", () => {
    navBar.classList.toggle("toggle");
});

navItem.forEach(item => {
    item.addEventListener("click", () => {
        navItem.forEach(nav => nav.classList.remove("active"));
        item.classList.add("active");
        
        navBar.classList.remove("toggle");
    })
});

// Accordion toggle for course sections
const toggleBtn = document.querySelectorAll(".course__btn");

toggleBtn.forEach(btn =>{
    btn.addEventListener("click", () => {
        const container = btn.closest(".course__container");
        const toggle = container.querySelector(".course__toggle");
        const arrow = btn.querySelector(".course__arrow");
        toggle.classList.toggle("toggle");
        arrow.classList.toggle("rotated");
    });
});

// Read more link
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".grid__paragraph-link");
  const allImages = document.querySelectorAll(".grid__img");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const textBlock = link.closest(".grid__item");
      const moreText = textBlock.querySelector(".grid__paragraph--more");

      // Toggle text visibility
      moreText.classList.toggle("hidden");
      const expanded = !moreText.classList.contains("hidden");
      link.textContent = expanded ? "Read less" : "Read more";

      // Expand or shrink ALL images
      allImages.forEach(img => {
        img.classList.toggle("expanded__height", expanded);
      });
    });
  });
});
