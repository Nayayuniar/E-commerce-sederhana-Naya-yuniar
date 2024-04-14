let search = document.querySelector(".search-box");
let navbar = document.querySelector(".navbar");

document.querySelector("#search-icon").onclick = () => {
  if (search) {
    search.classList.toggle("active");
  }
  if (navbar) {
    navbar.classList.remove("active");
  }
};

document.querySelector("#menu-icon").onclick = () => {
  if (navbar) {
    navbar.classList.toggle("active");
  }
  if (search) {
    search.classList.remove("active");
  }
};

window.onscroll = () => {
  if (navbar) {
    navbar.classList.remove("active");
  }
  if (search) {
    search.classList.remove("active");
  }
};

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (header) {
    header.classList.toggle("shadow", window.scrollY > 0);
  }
});
