const openMenu = document.querySelector(".nav__btn");
const navBar = document.querySelector(".nav__menu");
const navItem = document.querySelectorAll(".nav__link");
const overlay = document.querySelector(".overlay");
const closeMenu = document.querySelector(".close__menu");

openMenu.addEventListener("click", () => {
  if(overlay.classList.contains("hidden")){
    overlay.classList.remove("hidden");
    navBar.classList.toggle("toggle");
    openMenu.classList.toggle("active");
  } else {
    overlay.classList.add("hidden");
    navBar.classList.remove("toggle");
    openMenu.classList.remove("active");
  } 
});

overlay.addEventListener("click", () => {
  navBar.classList.remove("toggle");
  overlay.classList.add("hidden");
});

closeMenu.addEventListener("click", () => {
  overlay.classList.remove("hidden");
})

navItem.forEach(item => {
    item.addEventListener("click", () => {
        navItem.forEach(nav => nav.classList.remove("active"));
        item.classList.add("active");
        
        navBar.classList.remove("toggle");
        overlay.classList.add("hidden");
        openMenu.classList.toggle("active");
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
    });
  });

// Testimonials slide
const slides = document.querySelector(".testimonials__slides");
const slide = document.querySelectorAll(".testimonials__slider");

const slideNext = document.querySelector(".testimonials__btn--next");
const slidePrev = document.querySelector(".testimonials__btn--prev");
const indicatorsContainer = document.querySelector(".indicators");

let slideIndex = 0;

slide.forEach((_, i) => {
  const dot = document.createElement("button");
  if(i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    slideIndex = i;
    showSlide(slideIndex);
  });
  indicatorsContainer.appendChild(dot);
});

const indicators = document.querySelectorAll(".indicators button");

function updateIndicators() {
  indicators.forEach((dot, i) => {
    dot.classList.toggle("active", i === slideIndex);
  });
}

function showSlide(i){
  const slideWidth = slide[0].clientWidth;
  slides.style.transform = `translateX(-${i * slideWidth}px)`;
  updateIndicators();
}

slideNext.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slide.length;
  showSlide(slideIndex)
});

slidePrev.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slide.length) % slide.length;
  showSlide(slideIndex)
});


