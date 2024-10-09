
const usuario1 = document.getElementById("usuario1");
const correo1 = document.getElementById("correo1");
const contrasena1 = document.getElementById("contrasena1");
let numeroSitio=0

function guardarSitio1(){
    newSite = {};
    newSite.usuario1 = usuario1.value;
    newSite.correo1 = correo1.value;
    newSite.contrasena1 = contrasena1.value;
    console.log("test1")
    numeroSitios = localStorage.getItem("sesiones")?localStorage.getItem("sesiones"):0;
    numeroSitios++;
    localStorage.setItem("sesiones", numeroSitios);
    localStorage.setItem("sesion" + numeroSitios, JSON.stringify(newSite));
    console.log(newSite);
    usuario1.value = "";
    correo1.value = "";
    contrasena1.value = "";
 }