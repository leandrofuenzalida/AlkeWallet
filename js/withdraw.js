// Evento "Realizar retiro"

const form = document.getElementById("withdrawForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const monto = Number(document.getElementById("amount").value);

  if (!monto || monto <= 0) {
    alert("Ingresa un monto válido.");
    return;
  }

  const saldoActual = obtenerSaldo();

  if (monto > saldoActual) {
    alert("No tienes saldo suficiente para retirar ese monto.");
    return;
  }

  const saldoNuevo = saldoActual - monto;
  guardarSaldo(saldoNuevo);

  agregarTransaccion({
    detalle: "Retiro de fondos",
    monto: -monto,
    fecha: fechaHoy(),
  });

  // Mensaje dinámico con jQuery antes de volver al menú
  $("#mensaje")
    .text("Retiro realizado. Nuevo saldo: " + formatearSaldo(saldoNuevo))
    .removeClass("d-none")
    .hide()
    .fadeIn(400);

  setTimeout(function () {
    window.location.href = "menu.html";
  }, 1200);
});
