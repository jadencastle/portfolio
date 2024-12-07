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

        // Append projectHtml to the "projects" container
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
