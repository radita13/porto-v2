// Hamburger Menu Mobile
function toggleMobileMenu(e) {
    e.classList.toggle("change")
    const navLinks = document.querySelector(".nav-links")
    navLinks.classList.toggle("show")
}

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


// Modal Services
document.addEventListener("DOMContentLoaded", function () {
    const modalServices = document.getElementById("myModal");
    const toggleButtonsServices = document.querySelectorAll(".toggle-button");
    const spanServices = document.getElementsByClassName("close")[0];

    function showModalServices(modalTitle, modalDescription) {
        modalServices.style.display = "block";
        document.querySelector(".modal-content-services h2").innerText = modalTitle;
        document.querySelector(".modal-content-services p").innerText = modalDescription;
    }

    spanServices.onclick = function () {
        modalServices.style.display = "none";
    };

    toggleButtonsServices.forEach((button) => {
        button.onclick = function () {
            const modalContent = this.closest(".services-card");
            const modalTitle = modalContent.querySelector(".title-services").innerText;
            const modalDescription = modalContent.querySelector(".description").innerText;
            showModalServices(modalTitle, modalDescription);
        };
    });
});


// Modal Project
document.addEventListener("DOMContentLoaded", function () {
    const modalProject = document.getElementById("myModal-project");
    const toggleButtonsView = document.querySelectorAll(".view-button");
    const spanProject = document.getElementsByClassName("close-project")[0];

    function showModalProject(projectName, projectBadge, projectDescription) {
        modalProject.style.display = "block";
        document.querySelector(".modal-content-project h2").innerText = projectName;
        document.querySelector(".modal-content-project p").innerText = projectDescription;
        const badgeContainer = document.querySelector(".modal-content-project .badge-container")
        badgeContainer.innerText = "";

        projectBadge.forEach((badge) => {
            const badgeElement = document.createElement("span")
            badgeElement.classList.add("badge")
            badgeElement.innerText = badge
            badgeElement.style.display = "inline-block"
            badgeContainer.appendChild(badgeElement)
        })
    }    

    spanProject.onclick = function () {
        modalProject.style.display = "none";
    }

    toggleButtonsView.forEach((button) => {
        button.onclick = function () {
            const projectContent = this.closest(".cover-project")
            const projectTitle = projectContent.querySelector(".project-name").innerText;
            const projectDescription = projectContent.querySelector(".project-description").innerText;
            const projectBadge = Array.from(projectContent.querySelectorAll(".badge")).map(badge => badge.innerText)
            showModalProject(projectTitle, projectBadge, projectDescription)
        };

    });
});