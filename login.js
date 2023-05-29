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

  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");

  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

// Appel de la fonction fetch 
fetch('http://localhost:5678/api/users/login', {

method: 'POST',
headers: {
  'Content-Type': 'application/json',
},
body: JSON.stringify(idConnexion),
})

/*.then((response) => response.json())
.then((respsonseData) => {
  data = respsonseData;
  console.log(data);
});
if (responseData.message) {
  emailError.textContent = "Erreur dans l'identifiant !";
  email.style.color = "red";
  console.log(idConnexion);
}
else if (data.error) {
  passwordError.textContent = "Une erreur dans le mot de passe !";
  emailError.textContent = "";
  inputPassword.style.color= "red";
  inputEmail.style.color = "#1d6154";
  console.log(idConnexion);
}
else {
  inputPassword.style.color = "#1d6154";
  passwordError.textContent = "";
  emailError.textContent = "";
  console.log("LogAdmon OK");
  console.log(idConnexion);

  localStorage.setItem("token", data.token),
  window.location.href = "index.html"; //Redirection à la page d'acceuil
}*/
  .then(response => {
    if (response.ok) {
      return(response.json());
    } 
    else  {
      //alert("Impossible de ce connecter ! Veuillez vérifier vos identifiants !");
      passwordError.textContent = "Une erreur dans le mot de passe !";
      emailError.textContent = "";
      inputPassword.style.color= "red";
      inputEmail.style.color = "#1d6154";
      console.log(idConnexion);
    }

})
  .then((data) =>  {  

    //inputPassword.style.color = "#1d6154";
    //passwordError.textContent = "";
    //emailError.textContent = "";

    localStorage.setItem("token", data.token),
    window.location.href = "index.html"; //Redirection à la page d'acceuil
    console.log(data);
    
}
)
}
);
}; 


