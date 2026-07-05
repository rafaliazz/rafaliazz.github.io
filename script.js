// ==========================
// Smooth scrolling
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const section = document.querySelector(
            this.getAttribute("href")
        );

        if(section){
            section.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});

// ==========================
// Active navigation
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if(window.scrollY >= top){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

// ==========================
// Fade cards in
// ==========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".card").forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";
    card.style.transition = "all .6s ease";

    observer.observe(card);

});