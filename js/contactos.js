// Manejo de la agenda de contactos (se guarda en localStorage)

const CONTACTOS_INICIALES = [
  { nombre: "Camila Rojas", alias: "@camirojas" },
  { nombre: "Martín Pérez", alias: "@martinp" },
  { nombre: "Sofía Contreras", alias: "@sofiac" },
];

function obtenerContactos() {
  const guardado = localStorage.getItem("contactos");

  if (guardado === null) {
    return CONTACTOS_INICIALES;
  }

  return JSON.parse(guardado);
}

function guardarContactos(contactos) {
  localStorage.setItem("contactos", JSON.stringify(contactos));
}
