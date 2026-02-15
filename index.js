// Mobile menu
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if(revealTop < windowHeight - 100){
            el.classList.add("active");
        }
    });
});
// Skill bar animation
const skillBars = document.querySelectorAll(".progress-bar");

function animateSkills() {
    skillBars.forEach(bar => {
        const value = bar.getAttribute("data-progress");
        const top = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 50) {
            bar.style.width = value + "%";
        }
    });
}

window.addEventListener("scroll", animateSkills);
