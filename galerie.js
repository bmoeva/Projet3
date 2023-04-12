// Récupération de la galerie d'image depuis GET/WORKS (http://localhost:5678/api/works)

init();

async function init() {
    // Appel API WORKS
    const responseWorks = await fetch('http://localhost:5678/api/works'); console.log(responseWorks);
    const worksArray = await responseWorks.json();

    // Appel API CATEGORIES
    const responseCategories = await fetch('http://localhost:5678/api/categories');
    const categoriesArray = await responseCategories.json();

    genererCategories(worksArray, categoriesArray)
    genererWorks(worksArray)
}

function genererWorks(worksaGenerer){
    document.querySelector(".gallery").innerHTML = ""; //  remise a zero
    for (let i = 0; i < worksaGenerer.length; i++) {

        const projet = worksaGenerer[i];
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

function genererCategories(works, categoriesaGenerer){
    categoriesaGenerer.push({name: 'Tous', id: '0'});
    for (let i = 0; i < categoriesaGenerer.length; i++) {

        const filtrer = categoriesaGenerer[i];
        const nomCategorie = filtrer.name;
        const idCategorie = filtrer.id;

        const divGallery = document.getElementById("filtres");
        const boutonFiltre = document.createElement("button");

        boutonFiltre.setAttribute("id", idCategorie)
        boutonFiltre.textContent = nomCategorie;

        divGallery.appendChild(boutonFiltre);

        boutonFiltre.addEventListener("click", function() {
            console.log(idCategorie);
            if (boutonFiltre.id == 0) { //  BOUTON TOUS
                //guests.unslift
                genererWorks(works);
            } else { // AUTRES BOUTONS
                const worksFiltres = works.filter(function (work) { // Pour chaque projet, je vérifie sa catégorie
                    return work.categoryId == boutonFiltre.id;
                });
                genererWorks(worksFiltres);
            }
        });
    }
}
