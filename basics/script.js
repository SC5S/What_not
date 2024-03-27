document.addEventListener("DOMContentLoaded", function () {
    // Dummy project data
    const projects = [
        { name: "Project 1", description: "Description of Project 1" },
        { name: "Project 2", description: "Description of Project 2" },
        { name: "Project 3", description: "Description of Project 3" }
    ];

    const projectList = document.getElementById("project-list");

    // Populate project list
    projects.forEach(project => {
        console.log("adding project to list");
        console.log(project.name);
        const projectItem = document.createElement("div");
        projectItem.classList.add("project-item");
        projectItem.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
      `;
        projectList.appendChild(projectItem);
    });

    // Form submission
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        // You can add code here to handle the form submission, e.g., send data to a server
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        // For demonstration purposes, we're just logging the form data
        alert("Form submitted!");
        contactForm.reset();
    });


    function toggleDrawer() {
        const drawer = document.querySelector('.drawer');
        drawer.style.left = drawer.style.left === '0px' ? '-250px' : '0px';
    }

    document.addEventListener('click', function (event) {
        const drawer = document.querySelector('.drawer');
        const navbarToggle = document.querySelector('.navbar-toggle');

        if (!drawer.contains(event.target) && event.target !== navbarToggle) {
            drawer.style.left = '-250px';
        }
    });

});
