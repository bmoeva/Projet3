init();

async function init() {

const loginForm = document.getElementById('login');
loginForm.addEventListener('submit', event => {
 
  event.preventDefault();
  event.stopImmediatePropagation();
  console.log(event);

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
  .then(response => response.json())
  .then((data) =>  {  
    alert("Vous êtes connecté !");
    localStorage.setItem("token", data.token),
    window.location.href = "index.html"; //Redirection à la page d'acceuil
    console.log(data);

  if(response.ok) {
      console.log("Connexion réussie !");
      return response.json();
}
  else{
    console.error("Impossible de ce connecter !");
}
}) 

  .catch((error) => {
   console.log(error);
});
}); 
}
