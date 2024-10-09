
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


// Función para dar Like y almacenar en Favoritos
function darLike(trailerId, titulo, estreno, videoSrc, descripcion) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    
    // Verificamos si el trailer ya está en favoritos
    let existe = favoritos.find(trailer => trailer.id === trailerId);
    
    if (!existe) {
        // Crear un objeto con la información del trailer
        let trailer = {
            id: trailerId,
            titulo: titulo,
            estreno: estreno,
            videoSrc: videoSrc,
            descripcion: descripcion
        };
        
        // Añadir el trailer a la lista de favoritos
        favoritos.push(trailer);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));  // Guardar en localStorage
        alert('Trailer agregado a Favoritos');
    } else {
        alert('Este trailer ya está en tus Favoritos');
    }
}

// Función para cargar los trailers favoritos
function cargarFavoritos() {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    
    // Si no hay favoritos, mostrar un mensaje
    if (favoritos.length === 0) {
        document.getElementById('favoritos-section').innerHTML = '<p>No tienes trailers en favoritos.</p>';
        return;
    }

    // Recorrer los trailers favoritos y mostrarlos en la página
    favoritos.forEach(function(trailer) {
        let trailerHTML = `
            <div class="trailer" id="${trailer.id}">
                <p>Estreno: ${trailer.estreno}</p>
                <iframe width="560" height="315" src="${trailer.videoSrc}" allowfullscreen></iframe>
                <h4>${trailer.titulo}</h4>
                <p>${trailer.descripcion}</p>
            </div>
        `;
        document.getElementById('favoritos-section').innerHTML += trailerHTML;
    });
}

// Ejecutar cargarFavoritos solo si estamos en la página de favoritos
if (window.location.pathname.includes('favoritos.html')) {
    window.onload = cargarFavoritos;
}
