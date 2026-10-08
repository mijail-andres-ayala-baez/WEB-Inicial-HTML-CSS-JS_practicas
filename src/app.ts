// Botón de nueva tarea
const botonNuevo = document.getElementById("botonNuevaTarea") as HTMLButtonElement;
const listaTrabajo = document.getElementById("listaTrabajo") as HTMLUListElement;
const contadorHoy = document.getElementById("contadorHoy") as HTMLElement;
const totalHoy = document.getElementById("totalHoy") as HTMLElement;
const totalTareas = document.getElementById("totalTareas") as HTMLElement;

botonNuevo.addEventListener("click", function () {
    const texto = prompt("¿Qué tarea quieres añadir?");

    if (texto == null || texto == "") {
        return;
    }

    // la añade a Trabajo por ahora
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = texto;
    listaTrabajo.appendChild(nuevaTarea);

    // sumar 1 a los contadores
    contadorHoy.textContent = (parseInt(contadorHoy.textContent || "0") + 1).toString();
    totalHoy.textContent = (parseInt(totalHoy.textContent || "0") + 1).toString();
    totalTareas.textContent = (parseInt(totalTareas.textContent || "0") + 1).toString();
});

// Abrir y cerrar las listas al hacer click en el título
const cabeceras = document.querySelectorAll(".cabecera-caja");

for (let i = 0; i < cabeceras.length; i++) {
    const cabecera = cabeceras[i] as HTMLElement;

    cabecera.addEventListener("click", function () {
        const contenido = cabecera.nextElementSibling as HTMLElement;
        const flecha = cabecera.querySelector(".flecha") as HTMLElement;

        contenido.classList.toggle("oculto");

        if (contenido.classList.contains("oculto")) {
            flecha.textContent = "▼";
        } else {
            flecha.textContent = "▲";
        }
    });
}

// Buscador
const buscador = document.getElementById("buscador") as HTMLInputElement;

buscador.addEventListener("keyup", function () {
    const busqueda = buscador.value.toLowerCase();
    const tareas = document.querySelectorAll(".contenido-tareas li");

    for (let i = 0; i < tareas.length; i++) {
        const tarea = tareas[i] as HTMLElement;
        const textoTarea = (tarea.textContent || "").toLowerCase();

        if (textoTarea.indexOf(busqueda) != -1) {
            tarea.style.display = "block";
        } else {
            tarea.style.display = "none";
        }
    }
});