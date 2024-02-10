$(document).ready(function() {
    // Verificar si hay una cadena de consulta y almacenarla en sessionStorage
    if (sessionStorage && window.location.search) {
        let queryString = window.location.href.split('?')[1];
        let guestsArray = decodeURIComponent(queryString).split(',');
        sessionStorage.setItem('guests', JSON.stringify({ names: guestsArray }));
    }

    // Obtener la lista de invitados desde sessionStorage y renderizarla
    const guestsObject = JSON.parse(sessionStorage.getItem('guests'));
    let names = guestsObject ? guestsObject.names : [];
    let guestListContainer = $(".list_guests");
    $.each(names, function(index, name) {
        guestListContainer.append("<p>" + name + "</p>");
    });

    // Detectar el final del video y mostrar el wrapper
    let video = document.getElementById("bg-video");
    video.addEventListener("ended", function() {
        video.style.display = "none"; // Ocultar el video
        $(".wraper").fadeIn(2500); // Mostrar el wrapper
    });
});
