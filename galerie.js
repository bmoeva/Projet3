// Récupération de la galerie d'image depuis GET/WORKS (http://localhost:5678/api/works)
const reponse = await fetch('http://localhost:5678/api/works');
console.log(reponse)
const works = await reponse.json();

genererWorks(works)
function genererWorks(worksaGenerer){
    for (let i = 0; i < worksaGenerer.length; i++) {

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

// Afficher  les filtres par catégories

const responseCategories = await fetch('http://localhost:5678/api/categories');
console.log(responseCategories)
const categories = await responseCategories.json();
console.log(categories)
genererCategories(categories)
function genererCategories(categoriesaGenerer){
    for (let i = 0; i < categoriesaGenerer.length; i++) {
        
        const filtrer = categories[i];
        const nomCategorie = filtrer.name;
        const idCategorie = filtrer.id;

        const divGallery = document.getElementById("filtres");
        const boutonFiltre = document.createElement("button");

        boutonFiltre.setAttribute("id", idCategorie)
        boutonFiltre.textContent = nomCategorie;

        divGallery.appendChild(boutonFiltre);
        console.log(boutonFiltre)

        boutonFiltre.addEventListener("click", function() {
            const worksOrdonnes = Array.from(categories);
            
            
            //console.log(boutonFiltre)
            console.log(worksOrdonnes)
            
        });

        
        //TEST POUR FILTRER LA CATEGORIE OBJETS (ne fonction pas)
        const boutonObjets = document.querySelector(".objets");

        function objetParent(boutonObjets) {
            boutton = document.getElementsByClassName("bouttons") [0];
            boutton.appendChild(boutonObjets);
        }; 
        console.log(boutonObjets);


        boutonObjets.addEventListener('click', () => {
            //const categoriesTries = categories.filter(function (works) {
               // return works.categoryId = 1;
           // });
            //console.log(boutonObjets)
       });

        


    }
}

/*async function categoriesObjets(){
    const categories = await filtrerObjets()
    console.log(categories, objets) 
    
    for (const objet of objets){
        const divGallery = document.querySelector(".gallery");
        const boutonFiltre = creerBouton(categories.name, categories.id);
    }
}*/