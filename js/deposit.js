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

  alert("Depósito realizado. Nuevo saldo: " + formatearSaldo(saldoNuevo));
  window.location.href = "menu.html";
});
