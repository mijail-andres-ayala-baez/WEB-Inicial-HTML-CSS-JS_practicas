// Cache DOM elements to avoid repeated lookups during user interactions
const botonNuevo = document.getElementById('botonNuevaTarea') as HTMLButtonElement;
const listaTrabajo = document.getElementById('listaTrabajo') as HTMLUListElement;
const contadorHoy = document.getElementById('contadorHoy') as HTMLElement;
const totalHoy = document.getElementById('totalHoy') as HTMLElement;
const totalTareas = document.getElementById('totalTareas') as HTMLElement;

botonNuevo.addEventListener('click', function () {
  const texto = prompt('¿Qué tarea quieres añadir?');

  // Prevent creating empty tasks if the user cancels or submits an empty string
  if (texto === null || texto === '') {
    return;
  }

  // TODO: Dynamically select the target list based on the active category instead of hardcoding it
  const nuevaTarea = document.createElement('li');
  nuevaTarea.textContent = texto;
  listaTrabajo.appendChild(nuevaTarea);

  // Fallback to '0' ensures mathematical operations don't result in NaN if the DOM is empty
  contadorHoy.textContent = (parseInt(contadorHoy.textContent || '0') + 1).toString();
  totalHoy.textContent = (parseInt(totalHoy.textContent || '0') + 1).toString();
  totalTareas.textContent = (parseInt(totalTareas.textContent || '0') + 1).toString();
});

// Attach toggle functionality to all category headers for the accordion effect
const cabeceras = document.querySelectorAll('.cabecera-caja');

for (let i = 0; i < cabeceras.length; i++) {
  const cabecera = cabeceras[i] as HTMLElement;

  cabecera.addEventListener('click', function () {
    const contenido = cabecera.nextElementSibling as HTMLElement;
    const flecha = cabecera.querySelector('.flecha') as HTMLElement;

    // Toggle visibility by adding/removing a CSS utility class
    contenido.classList.toggle('oculto');

    // Update the visual indicator based on the current state of the content
    if (contenido.classList.contains('oculto')) {
      flecha.textContent = '▼';
    } else {
      flecha.textContent = '▲';
    }
  });
}

// Real-time task filtering mechanism
const buscador = document.getElementById('buscador') as HTMLInputElement;

buscador.addEventListener('keyup', function () {
  // Normalize casing to ensure search is case-insensitive
  const busqueda = buscador.value.toLowerCase();
  const tareas = document.querySelectorAll('.contenido-tareas li');

  for (let i = 0; i < tareas.length; i++) {
    const tarea = tareas[i] as HTMLElement;
    const textoTarea = (tarea.textContent || '').toLowerCase();

    // Check if the task text contains the search substring
    if (textoTarea.indexOf(busqueda) !== -1) {
      tarea.style.display = 'block';
    } else {
      tarea.style.display = 'none';
    }
  }
});