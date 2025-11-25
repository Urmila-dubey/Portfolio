// ------------------------- NAVBAR SCROLL EFFECT -------------------------

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// ------------------------- MOBILE NAV TOGGLE -------------------------

const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector("nav ul");

if (menuIcon) {
    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


// ------------------------- SECTION REVEAL ANIMATION -------------------------

const sections = document.querySelectorAll("section");

const revealSection = () => {
    const triggerPoint = window.innerHeight * 0.85;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < triggerPoint) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

// Initial styles for sections
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = " all 0.8s ease-out";
});

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);
