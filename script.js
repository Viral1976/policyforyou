// ==============================
// PolicyForYou.in
// JavaScript
// ==============================

// Welcome message
window.addEventListener("load", function () {
    console.log("Welcome to PolicyForYou.in");
});

// Smooth scroll for menu links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Button hover effect
const buttons = document.querySelectorAll(".buttons a");

buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});

// Current year in footer
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        "&copy; " +
        new Date().getFullYear() +
        " PolicyForYou.in | Viral Upadhyay";
}
