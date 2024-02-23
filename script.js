$(document).ready(function() {
    // Obtener la cadena de consulta de la URL
    let queryString = window.location.search.substring(1); // Obtener la cadena de consulta sin el signo de interrogación

    // Decodificar la cadena de consulta para manejar caracteres especiales
    queryString = decodeURIComponent(queryString);

    // Dividir la cadena de consulta en un array de nombres de invitados
    let guestsArray = queryString.split(',');

    // Obtener el contenedor de la lista de invitados
    let guestListContainer = $(".list_guests");

    // Renderizar cada nombre de invitado en el contenedor
    $.each(guestsArray, function(index, name) {
        guestListContainer.append("<p>" + name + "</p>");
    });

    // Detectar el final del video y mostrar el wrapper
    let video = document.getElementById("bg-video");
    let audio = new Audio("music.mp3"); // Crea un nuevo elemento de audio

    video.addEventListener("ended", function() {
        video.style.height = "0"; // Establecer la altura del video a 0
        $(".wraper").fadeIn(2500); // Mostrar el wrapper
        audio.play(); // Reproducir la música
    });

    // Evento clic para el botón de confirmar asistencia
    $("#confirmAttendance").click(function() {
        // Crear el mensaje de WhatsApp con los nombres de los invitados
        let message = guestsArray.join(", ");

        // URL de WhatsApp con el mensaje predefinido
        let whatsappURL = "https://api.whatsapp.com/send?phone=573238071801&text=Hola%20Luisa%2C%20queremos%20compartir%20este%20momento%20tan%20especial%20a%20tu%20lado%2C%20nos%20vemos%C2%A0pronto%F0%9F%8E%89%F0%9F%92%AB%0A" + encodeURIComponent(message);

        // Redirigir al usuario a WhatsApp con el mensaje listo para enviar
        window.location.href = whatsappURL;
    });
});
