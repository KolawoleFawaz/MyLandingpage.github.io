const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");
const sections = document.querySelectorAll("section");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("active");
});

sections.forEach((section) => {
    section.addEventListener("click", () => {
        if (section.classList.contains("active")) {
            section.classList.remove("active");
        } else {
            sections.forEach((s) => s.classList.remove("active"));
            section.classList.add("active");
        }
    });
});

