// Función para dar like y guardar en favoritos
function darLike(id, titulo, estreno, enlace, descripcion) {
    const trailer = { id, titulo, estreno, enlace, descripcion };

    // Obtener la lista de favoritos del almacenamiento local
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    // Verificar si el trailer ya está en favoritos
    const existe = favoritos.some(fav => fav.id === id);
    
    if (!existe) {
        // Si no está, lo agrega a la lista de favoritos
        favoritos.push(trailer);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        alert('Trailer agregado a favoritos!');
    } else {
        alert('Este trailer ya está en favoritos.');
    }
}

// Función para renderizar los trailers favoritos
function renderizarFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const favoritosSection = document.getElementById('favoritos-section');

    // Limpiar la sección antes de renderizar
    favoritosSection.innerHTML = '';

    // Renderizar cada trailer favorito
    favoritos.forEach(fav => {
        const trailerDiv = document.createElement('div');
        trailerDiv.className = 'trailer';
        trailerDiv.innerHTML = `
            <p>Estreno: ${fav.estreno}</p>
            <iframe width="560" height="315" src="${fav.enlace}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h4>${fav.titulo}</h4>
            <p>${fav.descripcion}</p>
        `;
        favoritosSection.appendChild(trailerDiv);
    });

    // Si no hay favoritos, mostrar un mensaje
    if (favoritos.length === 0) {
        favoritosSection.innerHTML = '<p>No hay trailers favoritos guardados.</p>';
    }
}

// Llamar a la función de renderizar favoritos cuando se carga la página de favoritos
window.onload = renderizarFavoritos();
