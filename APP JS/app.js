
document.getElementById("encuesta").addEventListener("submit", function(event) {
    // Evitar el comportamiento predeterminado
    event.preventDefault();

   
    document.getElementById("errorMensaje").innerText = "";

    // Obtener los valores de los campos
    var fname = document.getElementById("fname").value.trim();
    var pelifav = document.getElementById("pelifav").value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Expresión regular para validar emails

    // Validar el campo "Nombre"
    if (fname === "") {
        document.getElementById("errorMensaje").innerText = "Por favor, diligencie todos los campos.";
        return;
    }

    // Validar el campo "Pelicula Favorita"
    if (pelifav === "") {
        document.getElementById("errorMensaje").innerText = "Por favor, diligencie todos los campos.";
        return;
    }

    // Si todas las validaciones son correctas, muestra un mensaje
    alert("buen gusto.");
});



function mostrarMenu() {
    var contenedor = document.querySelector('.menu-contenedor');
    contenedor.classList.toggle('mostrar');
}

// Función para redirigir a otra página
function navegar(pagina) {
    window.location.href = pagina;
}

// Cerrar el menú si se hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.boton-menu') && !event.target.closest('.boton-menu')) {
        var dropdowns = document.getElementsByClassName("menu-contenedor");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('mostrar')) {
                openDropdown.classList.remove('mostrar');
            }
        }
    }
}

// app.js

