// Botón de nueva tarea
var botonNuevo = document.getElementById("botonNuevaTarea");
var listaTrabajo = document.getElementById("listaTrabajo");
var contadorHoy = document.getElementById("contadorHoy");
var totalHoy = document.getElementById("totalHoy");
var totalTareas = document.getElementById("totalTareas");

botonNuevo.addEventListener("click", function () {
    var texto = prompt("¿Qué tarea quieres añadir?");

    if (texto == null || texto == "") {
        return;
    }

    // añade a Trabajo (cambiarlo a cuando se pueda añadir a la lista correspondiente)
    var nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = texto;
    listaTrabajo.appendChild(nuevaTarea);

    // sumar 1 a los contadores
    contadorHoy.textContent = parseInt(contadorHoy.textContent) + 1;
    totalHoy.textContent = parseInt(totalHoy.textContent) + 1;
    totalTareas.textContent = parseInt(totalTareas.textContent) + 1;
});

// Abrir y cerrar las listas al hacer click en el título
var cabeceras = document.querySelectorAll(".cabecera-caja");

for (var i = 0; i < cabeceras.length; i++) {
    cabeceras[i].addEventListener("click", function () {
        var contenido = this.nextElementSibling;
        var flecha = this.querySelector(".flecha");

        contenido.classList.toggle("oculto");

        if (contenido.classList.contains("oculto")) {
            flecha.textContent = "▼";
        } else {
            flecha.textContent = "▲";
        }
    });
}

// Buscador
var buscador = document.getElementById("buscador");

buscador.addEventListener("keyup", function () {
    var busqueda = buscador.value.toLowerCase();
    var tareas = document.querySelectorAll(".contenido-tareas li");

    for (var i = 0; i < tareas.length; i++) {
        var textoTarea = tareas[i].textContent.toLowerCase();

        if (textoTarea.indexOf(busqueda) != -1) {
            tareas[i].style.display = "block";
        } else {
            tareas[i].style.display = "none";
        }
    }
});
