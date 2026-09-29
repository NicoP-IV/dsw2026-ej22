/*
  Buscador de especialidades.
  Cuando el usuario escribe en el input, mostramos solo las filas
  cuyo nombre coincide con lo escrito. Las demás las escondemos.
*/

// Esperamos a que el HTML esté cargado.
document.addEventListener("DOMContentLoaded", () => {

  const input = document.getElementById("search"); // caja de texto
  const filas = document.querySelectorAll("#tbody tr"); // todas las filas

  // Cada vez que el usuario escribe una letra...
  input.addEventListener("input", () => {

    // Texto escrito, en minúsculas (para no distinguir may/min).
    const texto = input.value.toLowerCase();

    // Recorremos cada fila.
    filas.forEach((fila) => {
      const nombre = fila.querySelector(".spec__name").textContent.toLowerCase();

      // Si el nombre incluye lo escrito, la mostramos; si no, la escondemos.
      if (nombre.includes(texto)) {
        fila.style.display = "";      // visible
      } else {
        fila.style.display = "none";  // oculta
      }
    });
  });

});
