let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

signIn.onclick = function() {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
}

signUn.onclick = function() {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Enviar";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
}
function myFunction() {
    // Get the checkbox
    let checkBox = document.getElementById("myCheck");

    let checkBox2 = document.getElementById("mujer");

    let checkBox3 = document.getElementById("hombre");
  
  }
const sitio = document.getElementById("sitioturistico");
const descripcion = 
