let proj;
fetch('/portfolio/projects.json')
    .then(response => {
        return response.json();
    })
    .then(projects => {
        console.log(projects);
        proj = projects;
        parseData(projects);
    })
    .catch(err => {
        console.log(`error ${err}`);
    });

    function parseData(data) {
        for (let i = 0; i < data.projects.length; i++) {
            const project = data.projects[i];
            const mainImage = project.mainimg; // Get the main image for each project
            
            // Log the image paths to check for issues
            console.log(`Image path: /portfolio/imgs/${mainImage}`);
            
            let projectHtml = `
                <a href="/portfolio/${project.subdomain}.html">
                    <div class="row project" id="${project.subdomain}">
                        <div class="projimg">
                            <!-- Use dynamic main image from data -->
                            <img src="/portfolio/imgs/${mainImage}" alt="${project.name} main image">
                        </div>
                        <div class="description">
                            <h2>${project.name}</h2>
                            <p class="subtitle">${project.subtitle}</p>
                            <p>${project.abstract}</p>
                        </div>
                    </div>
                </a>
            `;
    
            document.getElementById("projects").innerHTML += projectHtml;
        }
    }
    

for (b of document.querySelectorAll("#buttons button")) {
    b.addEventListener("click", e => {
        console.log(e.target.value);
        sortProjects(e.target.value);
    });
}

function sortProjects(button) {
    if (button == "clear") {
        for (let i = 0; i < proj.projects.length; i++) {
            document.getElementById(proj.projects[i].subdomain).style.display = "flex";
        }
    } else if (button != undefined) {
        for (let i = 0; i < proj.projects.length; i++) {
            if (proj.projects[i].category.includes(button) == true) {
                document.getElementById(proj.projects[i].subdomain).style.display = "flex";
            } else {
                document.getElementById(proj.projects[i].subdomain).style.display = "none";
            }
        }
    } else {
        console.log("error, button value is undefined");
    }
}
function openLinkedIn() {
    window.open('https://www.linkedin.com/in/jadencastle/', '_blank');
}

function copyEmail() {
    const email = 'jaden.castle@colorado.edu';
    navigator.clipboard.writeText(email)
        .then(() => {
            const notification = document.getElementById('notification');
            notification.textContent = 'Email copied to clipboard';
            notification.style.display = 'block'; // Show notification
            notification.style.opacity = '1'; // Make it visible

            // Hide notification after 3 seconds
            setTimeout(() => {
                notification.style.opacity = '0'; // Fade out
                setTimeout(() => {
                    notification.style.display = 'none'; // Hide after fade out
                }, 500); // Match the transition duration
            }, 3000); // Show for 3 seconds
        })
        .catch(err => {
            console.error('Could not copy email: ', err);
        });
}

// Get all the images
const images = document.querySelectorAll('.graph-grid img');
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imgModalContent");
const captionText = document.getElementById("caption");
const closeModal = document.getElementsByClassName("close")[0];

// When an image is clicked, open the modal
images.forEach((image) => {
    image.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    };
});

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function () {
    modal.style.display = "none";
};
