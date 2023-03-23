// Récupération de la galerie d'image depuis GET/WORKS (http://localhost:5678/api/works)
const reponse = await fetch('http://localhost:5678/api/works');
const works = await reponse.json();

genererWorks(works)
function genererWorks(works){
    for (let i = 0; i < works.length; i++) {

        const projet = works[i];
        const divGallery = document.querySelector(".gallery");
        const worksElement = document.createElement("projet");
        const imageUrlElement = document.createElement("img");
        imageUrlElement.src = projet.imageUrl;
        const nomElement = document.createElement("p");
        nomElement.innerText = projet.title;

        divGallery.appendChild(worksElement);
        worksElement.appendChild(imageUrlElement);
        worksElement.appendChild(nomElement);
        
    }
}
