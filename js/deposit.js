// Evento "Realizar depósito"

const form = document.getElementById("depositForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const monto = Number(document.getElementById("amount").value);

  if (!monto || monto <= 0) {
    alert("Ingresa un monto válido.");
    return;
  }

  const saldoActual = obtenerSaldo();
  const saldoNuevo = saldoActual + monto;

  guardarSaldo(saldoNuevo);

  // Mensaje dinámico con jQuery antes de volver al menú
  $("#mensaje")
    .text("Depósito realizado. Nuevo saldo: " + formatearSaldo(saldoNuevo))
    .removeClass("d-none")
    .hide()
    .fadeIn(400);

  setTimeout(function () {
    window.location.href = "menu.html";
  }, 1200);
});
