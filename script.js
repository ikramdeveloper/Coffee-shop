const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");

const cartContainer = document.querySelector(".cart-items-container");
const cartBtn = document.querySelector("#cart-btn");

const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  cartContainer.classList.remove("active");
  searchForm.classList.remove("active");
});

cartBtn.addEventListener("click", () => {
  cartContainer.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
});

searchBtn.addEventListener("click", () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartContainer.classList.remove("active");
});

// window.addEventListener("scroll", () => {
//   navbar.classList.remove("active");
//   cartContainer.classList.remove("active");
//   searchForm.classList.remove("active");
// });
