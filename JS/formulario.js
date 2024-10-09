
function myFunction() {
    // Get the checkbox
    let checkBox = document.getElementById("myCheck");

    let checkBox2 = document.getElementById("mujer");

    let checkBox3 = document.getElementById("hombre");
  
  }
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const usuario = document.getElementById("usuario");
const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const confirmarcontrasena = document.getElementById("confirmarcontrasena");
let numeroSitio=0

function guardarSitio(){
    newSite = {};
    newSite.nombre = nombre.value;
    newSite.apellido = apellido.value;
    newSite.usuario = usuario.value;
    newSite.correo= correo.value;
    newSite.contrasena = contrasena.value;
    newSite.confirmarcontrasena = confirmarcontrasena.value;
    console.log("test")
    numeroSitios = localStorage.getItem("formularios")?localStorage.getItem("formularios"):0;
    numeroSitios++;
    localStorage.setItem("formularios", numeroSitios);
    localStorage.setItem("formulario" + numeroSitios, JSON.stringify(newSite));
    console.log(newSite);
    nombre.value = "";
    apellido.value = "";
    usuario.value = "";
    correo.value = "";
    contrasena.value = "";
    confirmarcontrasena.value = "";
 }
