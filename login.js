init();

async function init() {

const loginForm = document.getElementById('login');

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  event.stopImmediatePropagation();
console.log(event);
  

  //const token = localStorage.getItem("token"); // Stockage du token d'authentification
  //console.log('token:', token);

  const idConnexion = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    
  };
// Appel de la fonction fecth 
const responseLogin = fetch('http://localhost:5678/api/users/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',  
},
  body: JSON.stringify(idConnexion)
})


/*then(response => {
  if (response.ok) {
    alert("Bienvenu Sophie Bluel");
    console.log(response);
}})*/
})



// Création  de la charge utile au format JSON
//const chargeUtile = JSON.stringify(user);



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
}