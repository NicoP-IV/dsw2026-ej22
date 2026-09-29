// Clave con la que guardamos el array en localStorage.
// localStorage solo guarda texto, así que todo el array se guarda como
// un único string en formato JSON bajo esta clave.
const ESPECIALIDADES_KEY = "especialidades";

const ESPECIALIDADES_INICIALES = [
  {
    id: 1,
    nombre: "Cardiología",
    descripcion: "Estudio y tratamiento de trastornos del corazón y del sistema circulatorio.",
    estado: "activo",
  },
  {
    id: 2,
    nombre: "Neurología",
    descripcion: "Diagnóstico y tratamiento de todas las categorías de afecciones cerebrales.",
    estado: "activo",
  },
  {
    id: 3,
    nombre: "Dermatología",
    descripcion: "Atención integral de enfermedades de la piel, uñas y cabello.",
    estado: "inactivo",
  },
  {
    id: 4,
    nombre: "Pediatría",
    descripcion: "Cuidado médico de lactantes, niños y adolescentes.",
    estado: "activo",
  },
];

// Lee el array completo de especialidades desde localStorage.
function obtenerEspecialidades() {
  const datosGuardados = localStorage.getItem(ESPECIALIDADES_KEY);

  if (datosGuardados === null) {
    guardarEspecialidades(ESPECIALIDADES_INICIALES);
    return ESPECIALIDADES_INICIALES;
  }

  try {
    // Lo guardado es un string JSON; lo convertimos de nuevo a array/objetos.
    return JSON.parse(datosGuardados);
  } catch (error) {
    // Si el contenido está corrupto por algún motivo, reiniciamos con los datos base
    // en vez de romper toda la página.
    console.error("El contenido de localStorage no es válido, se reinicia:", error);
    guardarEspecialidades(ESPECIALIDADES_INICIALES);
    return ESPECIALIDADES_INICIALES;
  }
}

// Sobrescribe todo el array guardado en localStorage.
function guardarEspecialidades(arrayEspecialidades) {
  // JSON.stringify convierte el array/objetos de JS a un string de texto,
  // que es el único tipo de dato que localStorage puede almacenar.
  localStorage.setItem(ESPECIALIDADES_KEY, JSON.stringify(arrayEspecialidades));
}

// Agrega una especialidad nueva al array existente y lo vuelve a guardar.
function agregarEspecialidad(nuevaEspecialidad) {
  const especialidades = obtenerEspecialidades();

  // Generamos un id simple: uno más que el mayor id que ya exista.
  const nuevoId =
    especialidades.length > 0
      ? Math.max(...especialidades.map((e) => e.id)) + 1
      : 1;

  especialidades.push({ id: nuevoId, ...nuevaEspecialidad });
  guardarEspecialidades(especialidades);
}