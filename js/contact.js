// Navbar active
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
    const logo = document.querySelector(".logo");
    const currentPath = window.location.pathname.split('/').pop();
    const navbar = document.querySelector(".navbar");

    navbar.classList.add("scrolled");
    logo.classList.add("show");

    setTimeout(() => {
        navLinks.forEach(link => link.classList.add("show"));
    }, 1000);

    if (currentPath === "contact.html") {
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "contact.html") {
                link.classList.add("active");
            }
        });
    } else {
        window.addEventListener("scroll", () => {
            let currentSection = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    currentSection = section.getAttribute("id");
                }
            });

            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href").includes(currentSection)) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });

            if (window.scrollY > 0) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            if (link.getAttribute("href") === "contact.html") {
                window.location.href = "contact.html";
                e.preventDefault();
            } else {
                const targetId = link.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth" });
                    e.preventDefault();
                }
            }
        });
    });
    window.addEventListener("load", () => {
        if (currentPath === "index.html") {
            navbar.classList.remove("scrolled");
        }
    });
});