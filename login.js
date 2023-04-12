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
  body: JSON.stringify(idConnexion)
})
/*.then((response) => {
  if(response.status == 200) {
    return response.json() }
  })*/
  .then(response => response.json())
  .then(body => console.log(body))

}) 

}
















/*.then((responseData) => {
  data = responseData;
  console.log(data);
  if (response.ok) {
    alert('Vous êtes connectées !');
    console.log(idConnexion);
  }
});*/

// Création  de la charge utile au format JSON
//const chargeUtile = JSON.stringify(user);

//const token = localStorage.getItem("token"); // Stockage du token d'authentification
  //console.log('token:', token);

//let reuslt = response.json();
//alert(reuslt.message); console.log(reuslt);

// Rédirection ver la page d'acceuil
  /*.then(response => {
    if (response.ok) {
      window.location.href = "http://127.0.0.1:550//Portfolio-architecte-sophie-bluel-master/FrontEnd/index.html";
    }

    // Prévenir l'utilaseur avec un message d'erreur 
    else {
      const erreur = document.createElement('p');
      loginError.textContent = 'erreur d'\ authentification';
      erreur.className = "red";
      Form.appendChild(erreur);
    }
  })*/
