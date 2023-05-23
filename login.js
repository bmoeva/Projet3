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
    alert("Connexion réussie !");
    localStorage.setItem("token", data.token),
    window.location.href = "index.html"; //Redirection à la page d'acceuil
    console.log(data);

  if(response.ok) {
      //return response.json();
}
  else{
    //alert("Impossible de ce connecter ! Veuillez vérifier vos identifiants !");
}
}) 
  .catch((error) => {
   error('Impossible de ce connecter ! Veuillez vérifier vos identifiants !');
});
}); 
}
  
  /*.then((data) =>  {  
    console.log(data);
    
    console.log(data);*/

