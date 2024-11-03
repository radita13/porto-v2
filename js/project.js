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

// Go Back
document.addEventListener("DOMContentLoaded", function () {
    const backArrow = document.querySelector(".back");

    if (backArrow) { 
        backArrow.addEventListener("click", (event) => {
            event.preventDefault();
            if (!sessionStorage.getItem("backOnce")) {
                sessionStorage.setItem("backOnce", "true");
                window.history.back();
            } else {
                window.location.replace("index.html");
            }
        });
    } else {
        console.error("Element with class 'back' not found.");
    }
});