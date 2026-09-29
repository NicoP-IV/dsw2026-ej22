/*
  Guardar especialidad (versión demo).
  Todavía no hay backend, así que al enviar el formulario solo
  mostramos un mensaje y volvemos al listado de especialidades.
*/

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("form-especialidad");

  form.addEventListener("submit", (evento) => {
    evento.preventDefault(); // evitamos que la página se recargue

    // Leemos lo que escribió el usuario.
    const nombre = document.getElementById("nombre").value.trim();

    // Validación mínima: el nombre no puede estar vacío.
    if (nombre === "") {
      alert("Por favor, ingresá el nombre de la especialidad.");
      return;
    }

    // Por ahora solo avisamos y volvemos al listado.
    alert("Especialidad guardada: " + nombre);
    window.location.href = "../Search/search-speciality.html";
  });

});
