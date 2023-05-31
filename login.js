
init();

async function init() {
  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");
  const feedbackPassword = document.getElementById('feedback-password');
  const feedbackEmail = document.getElementById('feedback-email');
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
.then(response => {
  if (response.ok) {
    return(response.json());
  }

else  {
    feedbackEmail.textContent = "Erreur dans l’identifiants !";
    inputEmail.style.color = "red";
    feedbackEmail.style.color = "red";

} if (response.message) {

    feedbackPassword.textContent = "Erreur dans le mot de passe !" ;
    feedbackEmail.textContent = "";
    inputPassword.style.color = "red";
    inputEmail.style.color = "#1d6154" ;

}

  }) 
  .then((data) =>  {  
    localStorage.setItem("token", data.token),
    window.location.href = "index.html"; //Redirection à la page d'acceuil
    console.log(data);

    inputPassword.style.color = "#1d6154";
    feedbackPassword.textContent = "";
    feedbackEmail.textContent = "";
  });
})}


