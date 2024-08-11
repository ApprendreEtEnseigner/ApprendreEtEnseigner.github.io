// const links = document.querySelectorAll('nav ul li .feature-clic')
const nav = document.querySelector("nav");
const activePage = window.location.pathname;
const links = document.querySelectorAll(".nav-links ul .link-underline a");
const mobileNav = document.querySelector("nav.mobile-nav");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");

links.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    nav.classList.add("scrolled");
    mobileNav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
    mobileNav.classList.remove("scrolled");
  }
});

menuIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.remove("active");
});
