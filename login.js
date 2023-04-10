const user = document.getElementById('#login');

user.addEventListener('submit', event => {
  event.preventDefault();

  const token = localStorage.getItem("token"); // Stockage du token d'authentification
  console.log('token:', token);

  const idConnexion = {
    email: event.target.querySelector("email").value,
    password: event.target.querySelector("password").value,
  }
});

// Création  de la charge utile au format JSON
//const chargeUtile = JSON.stringify(user);

// Appel de la fonction fecth 
const response = await fetch('http://localhost:5678/api/users/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
},
  body: JSON.stringify(user)
  //body: chargeUtile
});

let reuslt = await response.json();
alert(reuslt.message); console.log(reuslt);

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
