/*
  Listado + buscador de especialidades.
  1) Al cargar la página, leemos el array desde localStorage
     (usando obtenerEspecialidades(), definida en speciality-storage.js)
     y con esos datos armamos las filas de la tabla.
  2) El buscador sigue funcionando igual que antes, pero ahora filtra
     sobre las filas que acabamos de generar dinámicamente.
*/

// Ícono genérico para las especialidades (uno solo, reutilizado en todas las filas).
const ICONO_ESPECIALIDAD = `
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M12 2l3 6.5L22 9.5l-5 4.9 1.2 6.9L12 18l-6.2 3.3L7 14.4 2 9.5l7-1z"/>
  </svg>
`;

// Construye el <tr> de una especialidad a partir de sus datos.
function crearFilaEspecialidad(especialidad) {
  const fila = document.createElement("tr");

  const esActivo = especialidad.estado === "activo";
  const claseBadge = esActivo ? "badge--active" : "badge--inactive";
  const textoBadge = esActivo ? "Active" : "Inactive";

  fila.innerHTML = `
    <td>
      <div class="spec">
        <span class="spec__icon">${ICONO_ESPECIALIDAD}</span>
        <span class="spec__name">${especialidad.nombre}</span>
      </div>
    </td>
    <td class="desc">${especialidad.descripcion || ""}</td>
    <td><span class="badge ${claseBadge}">${textoBadge}</span></td>
    <td>
      <div class="actions">
        <button class="icon-btn" type="button" title="Editar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>
          </svg>
        </button>
        <button class="icon-btn icon-btn--danger" type="button" title="Borrar" data-id="${especialidad.id}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M6 6l1 14h10l1-14"/>
          </svg>
        </button>
      </div>
    </td>
  `;

  return fila;
}

// Lee localStorage y vuelve a dibujar toda la tabla desde cero.
function renderizarTabla() {
  const tbody = document.getElementById("tbody");
  const especialidades = obtenerEspecialidades(); // viene de specialitu-storage.js

  tbody.innerHTML = ""; // limpiamos para no duplicar filas si se llama de nuevo
  especialidades.forEach((especialidad) => {
    tbody.appendChild(crearFilaEspecialidad(especialidad));
  });
}

document.addEventListener("DOMContentLoaded", () => {

  // 1) Dibujamos la tabla apenas carga la página.
  renderizarTabla();

  // 2) Buscador: misma lógica de antes, pero ahora sobre las filas generadas.
  const input = document.getElementById("search");

  input.addEventListener("input", () => {
    const texto = input.value.toLowerCase();

    document.querySelectorAll("#tbody tr").forEach((fila) => {
      const nombre = fila.querySelector(".spec__name").textContent.toLowerCase();
      fila.style.display = nombre.includes(texto) ? "" : "none";
    });
  });

});
