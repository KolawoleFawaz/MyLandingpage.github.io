//console.log("nav");
const nav_links = document.querySelector(".nav-links");
const menuBtn_open = document.querySelector("#menu-btn_open");
const menuBtn_close = document.querySelector("#menu-btn_close");

//console.log(nav_links, menuBtn_open, menuBtn_close);

menuBtn_open.onclick = () => toggler();
menuBtn_close.onclick = () => toggler();
function toggler() {
  nav_links.classList.toggle("active");
  menuBtn_open.classList.toggle("close");
  menuBtn_close.classList.toggle("open");
};


