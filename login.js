
init();

async function init() {
  const loginForm = document.getElementById('login');
  const textErreur = document.getElementById("erreur");

  var erreur;
  var inputs = document.getElementsByTagName("input");
  loginForm.addEventListener('submit', event => {
 
  event.preventDefault();
  event.stopImmediatePropagation();
  console.log(event);

  // J'ai créer une boucle, pour afficher un message d'erreur pour tous les champs inputs, si ils ne sont pas remplis 
  for (var i = 0; i < inputs.length; i++) {
    if(!inputs[i].value) {
      erreur = "Veuillez renseigner tous les champs !";
      textErreur.style.color = "red";
    }
  }

  if(erreur) {
    event.preventDefault();
    document.getElementById("erreur").innerHTML = erreur;
    return false;
  }

const idConnexion = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
};
  console.log(idConnexion);

// Appel de la fonction fetch 

fetch('http://localhost:5678/api/users/login', {

method: 'POST',
headers: {
  'Content-Type': 'application/json',
},

body: JSON.stringify(idConnexion),

})
.then(response => {
  if (response.ok) {
    return(response.json());
  }
   }) 
  .then((data) =>  {  
    
    localStorage.setItem("token", data.token),
    window.location.href = "index.html"; //Redirection à la page d'acceuil
    console.log(data);
    textErreur.textContent = "none";
  });
})};

let loginLogout = document.getElementById("login-btn");
  document.getElementById("login-btn").innerText = "logout";
  loginLogout.addEventListener("click", function() {
  localStorage.removeItem("token"),
  window.location.href = "index.html"; //Redirection à la page d'acceuil
})
