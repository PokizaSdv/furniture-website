// const burgerIcon = document.getElementById("mobile-nav-icon");

// const mobileNav = document.getElementById("mobile-nav");

// burgerIcon.addEventListener("click", () => {
//     mobileNav.style.display = "inline-block"
// });

// const closeIcon = document.getElementsByClassName("close-icon");

// closeIcon.addEventListener("click", () => {
//     mobileNav.style.display = "none"
// })

const burgerIcon = document.getElementById("mobile-nav-icon");

const mobileNav = document.querySelector(".mobile-nav");
mobileNav.style.padding = "4rem 2.8rem";
mobileNav.style.textAlign = "center";

burgerIcon.addEventListener("click", () => {
    mobileNav.classList.add("show-menu");
});

const closeIcon = document.querySelector(".close-icon");

closeIcon.addEventListener("click", () => {
    mobileNav.classList.remove("show-menu");
});

const logoMobileNav = mobileNav.querySelector(".mobile-nav_link");

logoMobileNav.style.margin = "0 auto";
logoMobileNav.style.paddingTop = "16rem";

const linksMobileNav = logoMobileNav.querySelectorAll("a");

linksMobileNav.forEach((li) => {
    li.style.fontSize = "4rem";
    li.style.marginBottom = "8rem";
});
