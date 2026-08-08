// Manejo del historial de transacciones (se guarda en localStorage)

function obtenerTransacciones() {
  const guardado = localStorage.getItem("transacciones");

  if (guardado === null) {
    return [];
  }

  return JSON.parse(guardado);
}

function agregarTransaccion(transaccion) {
  const transacciones = obtenerTransacciones();
  transacciones.unshift(transaccion);
  localStorage.setItem("transacciones", JSON.stringify(transacciones));
}

function fechaHoy() {
  const hoy = new Date();
  return hoy.toLocaleDateString("es-CL", { day: "numeric", month: "short", year: "numeric" });
}
