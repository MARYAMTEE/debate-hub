const openMenu = document.querySelector(".nav__btn");
const navBar = document.querySelector(".nav__menu");
const navLink = document.querySelectorAll(".nav__link");

openMenu.addEventListener("click", () => {
    navBar.classList.toggle("toggle");
});

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navLink.forEach(nav => nav.classList.remove("active"));
        link.classList.add("active");
        navBar.classList.remove("toggle");
    })
});

const curricumlumSyllabus = document.querySelectorAll(".accordion");

curricumlumSyllabus.forEach((item, index) => {
    const button = item.querySelector(".curriculum-btn");
    const downArrow = item.querySelector(".curriculum-arrow");
    const text = item.querySelector(".text");

    button.addEventListener("click", () => {
        const isOpen = text.classList.toggle("toggle");
        
        downArrow.classList.toggle("fa-down-long");
        downArrow.classList.toggle("fa-up-long");

        if(isOpen) {
            button.classList.add("active");
        }else {
            button.classList.remove("active");
        }
    })
});

//  nav.toggle{
    
// }

// .text.toggle{
//     display: block;
//  }

//  .curriculum-btn.active{
//     background-color: orange;
//  }