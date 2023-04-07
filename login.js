const formEl = document.getElementById('loginform'); console.log(formEl);

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const token = localStorage.getItem("token");
  console.log('token:', token);

  const user = {
    email: event.target.querySelector("email").value,
    password: event.target.querySelector("password").value,
  };
})

// Création  de la charge utile au format JSON
const chargeUtile = JSON.stringify(user);

// Appel de la fonction fecth 
const responseLogin = await fetch('http://localhost:5678/api/users/login', {
  method: 'POST',
  headers: {
    "content-type": "application/json"
},
  body: chargeUtile
})
  .then(response => {
    if (response.ok) {
      document.location.href = "http://127.0.0.1:5501/Portfolio-architecte-sophie-bluel-master/FrontEnd/index.html";
    }
    else {
      const erreur = document.createElement('p');
      erreur.textContent = 'erreur d authentification';
      erreur.className = "red";
      Form.appendChild(erreur);
    }
  })
//const loginPage = await responseLogin.json();
//console.log(responseLogin);