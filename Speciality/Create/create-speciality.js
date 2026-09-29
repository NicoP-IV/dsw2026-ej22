/*
  Guardar especialidad.
  Al enviar el formulario, guardamos los datos en localStorage
  (usando las funciones de speciality-storage.js) y volvemos al listado,
  donde ahora sí va a aparecer la especialidad recién creada.
*/

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("form-especialidad");

  form.addEventListener("submit", (evento) => {
    evento.preventDefault(); // evitamos que la página se recargue

    // Leemos lo que escribió el usuario en cada campo.
    const nombre = document.getElementById("nombre").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const estado = document.getElementById("estado").value; // "activo" o "inactivo"

    // Validación mínima: el nombre no puede estar vacío.
    if (nombre === "") {
      alert("Por favor, ingresá el nombre de la especialidad.");
      return;
    }

    // agregarEspecialidad viene de speciality-storage.js (incluido antes que este script)
    agregarEspecialidad({ nombre, descripcion, estado });

    alert("Especialidad guardada: " + nombre);
    window.location.href = "../Search/search-speciality.html";
  });

});
