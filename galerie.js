// Récupération de la galerie d'image depuis GET/WORKS (http://localhost:5678/api/works)

init();

async function init() {

    const WorksModale = await fetch("http://localhost:5678/api/works");
    const modalProjects = await WorksModale.json();

    // Appel API WORKS
    const responseWorks = await fetch('http://localhost:5678/api/works'); console.log(responseWorks);
    const worksArray = await responseWorks.json();

    // Appel API CATEGORIES
    const responseCategories = await fetch('http://localhost:5678/api/categories');
    const categoriesArray = await responseCategories.json();

    genererCategories(worksArray, categoriesArray)
    genererWorks(worksArray)
    initOpenModalButton()
    genererProjectsModale(modalProjects)
    deleteProjects()
}

//*********FUNCTION POUR L'OUVERTURE DE LA MODALE **********/
function initOpenModalButton() {
    let modal = document.getElementById("modal1");
    let editProjectButton = document.getElementById("edit-projet");
    if(localStorage.getItem("token") !== null && localStorage.getItem("token") !== "") {
        editProjectButton.style.display = "block";
        const blackLine = document.getElementById("nav-edit-publish-mode");
        blackLine.style.display=null;

        const buttonFilter = document.getElementById("filtres")
        buttonFilter.style.display = "none";
    } else {
        editProjectButton.style.display = "none";
    }
    editProjectButton.addEventListener("click", function() {
        modal.style.display = "block";
    });
    let modalClose = document.getElementById("modalClose");
    modalClose.addEventListener("click", function() {
        modal.style.display = "none";
    });
}

/**********FUNCTION POUR GENERER LA GALERIE WORKS **********/
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

/**********FUNCTION POUR GENERER LA GALERIE PAR CATEGORIE**********/
function genererCategories(works, categoriesaGenerer){
    categoriesaGenerer.push({name: 'Tous', id: '0'});
    for (let i = 0; i < categoriesaGenerer.length; i++) {
        categoriesaGenerer = categoriesaGenerer.sort(compare)

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

function compare( a, b ) {
    if ( a.id < b.id ){
        return -1;
    }
    return 1;
}

/******** APPEL A LA FUNCTION POUR AFFICHER WORKS DANS LA MODALE *********/
    function genererProjectsModale(modalProjects) {
        for (let i = 0; i < modalProjects.length; i++) {
            const projectsModal = modalProjects[i];
            const divgalleryphoto = document.getElementById("gallery-photo");
            const worksModalElement = document.createElement("projets");
            const pictureUrlElement = document.createElement("img");
            pictureUrlElement.src = projectsModal.imageUrl;
            const legendElement = document.createElement("p");
            legendElement.innerText = "éditer";
            const deleteElement = document.createElement("button");
            deleteElement.classList.add("buttonBin");


            const icon = document.createElement("i");
            icon.classList.add("fa-solid", "fa-trash-can");

            divgalleryphoto.appendChild(worksModalElement);
            worksModalElement.appendChild(pictureUrlElement);
            worksModalElement.appendChild(legendElement);
            worksModalElement.appendChild(deleteElement);
            deleteElement.appendChild(icon);

            const workId = projectsModal.id;

            /********* SUPPRESSION DE PROJET **********/
    function deleteProjects() {
        fetch(`http://localhost:5678/api/works/${workId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`
    }
     });
        if(response.ok) {
            console.log(`Travail${workId}supprimer avec succes !`);
    }
        else {
            console.error(`Impossible de supprimer ${workId} !`);
     }
    }
        
    }  
}

