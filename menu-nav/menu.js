 /*
  Menú móvil: abrir y cerrar el menú lateral con el botón ☰.

  Idea general:
  - El menú se "abre" o "cierra" agregando/sacando la clase CSS "open".
  - Cuando está abierto, mostramos un fondo oscuro (scrim) detrás.
  - En pantalla grande el botón ☰ está oculto, así que esto solo
    se usa en celular. No hace falta nada más.
*/

// Esperamos a que el HTML termine de cargar antes de buscar los elementos.
document.addEventListener("DOMContentLoaded", () => {

  // 1) Agarramos los 3 elementos que necesitamos.
  const boton = document.getElementById("menu-toggle");   // botón ☰
  const menu  = document.getElementById("sidebar");        // menú lateral
  const fondo = document.getElementById("sidebar-scrim");  // fondo oscuro

  // 2) Función para abrir el menú.
  function abrirMenu() {
    menu.classList.add("open"); // el CSS lo muestra
    fondo.hidden = false;       // mostramos el fondo oscuro
  }

  // 3) Función para cerrar el menú.
  function cerrarMenu() {
    menu.classList.remove("open"); // el CSS lo esconde
    fondo.hidden = true;           // escondemos el fondo oscuro
  }

  // 4) Al tocar el botón ☰: si está cerrado lo abre, si está abierto lo cierra.
  boton.addEventListener("click", () => {
    if (menu.classList.contains("open")) {
      cerrarMenu();
    } else {
      abrirMenu();
    }
  });

  // 5) Al tocar el fondo oscuro, cerramos el menú.
  fondo.addEventListener("click", cerrarMenu);

  // 6) Al elegir una opción del menú, lo cerramos solo (queda más prolijo).
  const links = menu.querySelectorAll(".sidebar__nav a");
  links.forEach((link) => {
    link.addEventListener("click", cerrarMenu);
  });

});