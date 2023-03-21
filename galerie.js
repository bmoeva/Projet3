// Récupération de la galerie d'image depuis GET/WORKS (http://localhost:5678/api/works)
const reponse = await fetch("http://localhost:5678/api/works");
console.log(reponse)
let projects = await reponse.json()
console.log(projects)
genererProjects(projects)
function genererProjects(projectsaGenerer) {
    const galerie = document.querySelector(".gallery");
    for (let i = 0; i < projectsaGenerer.length; i++) {
        const titre = document.createElement("titre");

    titre.innerText = projectsaGenerer[i].title;
    
    galerie.appendChild(titre);
    }
    
}

