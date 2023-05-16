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
    initbtnaddWork() 
}

//*********FUNCTION POUR L'OUVERTURE DE LA MODALE **********/
function initOpenModalButton() {

    let modal = document.getElementById("modal1");
    let editProjectButton = document.getElementById("edit-projet");

    if(localStorage.getItem("token") !== null && localStorage.getItem("token") !== "") {
        editProjectButton.style.display = "block";
        const blackLine = document.getElementById("nav-edit-publish-mode");
        blackLine.style.display=null;

        const editPhotoProfil = document.getElementById("edit-photo");
        editPhotoProfil.style.display=null;

        const buttonFilter = document.getElementById("filtres")
        buttonFilter.style.display = "none";
    } 
    else {
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
        boutonFiltre.className = "stylebouton";
        console.log(boutonFiltre.outerHTML);

        //const div = document.createElement("div");
        //div.className = "stylecss";
        //console.log(div.outerHTML);

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
        document.getElementById("gallery-photo").innerHTML = ""; //  remise a zero
        for (let i = 0; i < modalProjects.length; i++) {
            const projectsModal = modalProjects[i];
            const divgalleryphoto = document.getElementById("gallery-photo");

            const worksModalElement = document.createElement("projets");

            const icon = document.createElement("i");
            icon.classList.add("fa-solid", "fa-trash-can");

            const pictureUrlElement = document.createElement("img");
            pictureUrlElement.src = projectsModal.imageUrl; console.log(projectsModal);

            const legendElement = document.createElement("p");
            legendElement.innerText = "éditer";

            const deleteElement = document.createElement("button");
            deleteElement.classList.add("buttonBin");


            divgalleryphoto.appendChild(worksModalElement);
            worksModalElement.appendChild(pictureUrlElement);
            worksModalElement.appendChild(legendElement);
            worksModalElement.appendChild(deleteElement);
            deleteElement.appendChild(icon);
            deleteElement.addEventListener("click", function()
             {
                deleteProjects(projectsModal.id, modalProjects);
             })
    }  
}

//*********FUNCTION POUR L'OUVERTURE DE LA DEUXIEME MODALE **********/


 function initbtnaddWork() {

    let openModal2 = document.getElementById("modal2");
    let buttonaddPhoto = document.getElementById("modal-btn-add"); 
    const fileImage = document.getElementById("file-image");
    let backButton = document.getElementById("back-modal");
    let modal2Close = document.getElementById("modal-close");
    let closeModale1 = document.getElementById("modal1");
    let readFile = document.getElementById("read-file");
    let infoImage = document.getElementById("info-image");

    if(localStorage.getItem("token") !== null && localStorage.getItem("token") !== ""){
        buttonaddPhoto.style.display = "block";
        fileImage.style.display = "none";
        

        buttonaddPhoto.addEventListener("click", function() {
        openModal2.style.display = "block";
    });
        backButton.addEventListener("click", function() {
            modal2.style.display = "none";
    });  
    // Fermer la modale 1 à l'ouverture de la modale 2
        buttonaddPhoto.addEventListener("click", function() {
            closeModale1.style.display = "none";
    });
    // Au click de la fléche gauche je retourne à la deuxième modale
        backButton.addEventListener("click", function() {
            closeModale1.style.display = "block";
    });

        fileImage.addEventListener("click", function() {
            readFile.style.display = "none";
    });

        fileImage.addEventListener("click", function() {
            infoImage.style.display = "none";
    });
    
    }
    else {
         
    }
        modal2Close.addEventListener("click", function() {
            modal2.style.display = "none";
    });

        buttonaddPhoto .addEventListener("click", event => {
            event.preventDefault();
    });

    

    const form = document.getElementById("form-post");
    const image = document.getElementById("file-image");
    const title = document.getElementById("title");
    const category = document.getElementById("category");


    form.addEventListener ('submit', (event) => {
        event.preventDefault();

    // Ajout de l'objet FormData pour l'envoi du formulaire
        const formData = new FormData();
        formData.append('title', title.value);
        formData.append('image', image.value[0]);
        console.log(image.files[0]);
        formData.append('category', category.value);

        for (var pair of formData.entries()) {
            console.log(pair[0] + ' : ' + pair[1]);
        }
        

    // Envoi de la requête pour l'ajout de la photo dans la liste de projets
        fetch("http://localhost:5678/api/works", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "authorization": 'Bearer ' + localStorage.getItem("token"),
                "Content-Type": "multipart/form-data"
            },
            body:formData
        })
        .then(postWorks => postWorks.json())
        .then(data => {
            console.log(data);
    // Réinitialisation du formulaire et de la prévisualisation de l'image
        })
        .catch(error => console.error('Erreur lors de l\'ajout du projet :', error));
    });
}

/********* SUPPRESSION DE PROJET **********/
function deleteProjects(workId, worksModale) {
    const token = localStorage.getItem("token")
    fetch(`http://localhost:5678/api/works/${workId}`, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
}
 })
 .then(response => {
        if(response.ok) {
            console.log(`Travail${workId}supprimer avec succes !`);
            console.log(worksModale);
            const worksModaleAfterDelete = worksModale.filter(work => work.id !== workId);
            console.log(worksModaleAfterDelete);
            genererProjectsModale(worksModaleAfterDelete);
        }
        else {
            console.error(`Impossible de supprimer ${workId} !`);
        }
    });
}

const fileimagePreview = document.getElementById("file-image");
const imagePreview = document.getElementById("image-preview");
fileimagePreview.onchange = function() {
    const [file] = fileimagePreview.files
    if (file) {
        imagePreview.src = URL.createObjectURL(file);
    }
  }


    
    
  