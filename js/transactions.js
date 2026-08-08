// Agrega los movimientos guardados (depósitos y envíos) arriba del historial

const listaTransacciones = document.getElementById("listaTransacciones");
const transacciones = obtenerTransacciones();

transacciones.forEach(function (transaccion) {
  const esPositivo = transaccion.monto >= 0;
  const signo = esPositivo ? "+" : "-";
  const clase = esPositivo ? "text-success" : "text-danger";

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  li.innerHTML =
    "<div><div>" + transaccion.detalle + "</div>" +
    '<div class="text-muted small">' + transaccion.fecha + "</div></div>" +
    '<span class="' + clase + ' fw-bold">' + signo + " " + formatearSaldo(Math.abs(transaccion.monto)) + "</span>";

  listaTransacciones.prepend(li);
});
