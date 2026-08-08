// Muestra el saldo actual en el Menú Principal

const saldoTexto = document.getElementById("saldo");
saldoTexto.textContent = formatearSaldo(obtenerSaldo());

// Animación simple con jQuery al cargar el menú
$(function () {
  $(".bg-primary").hide().fadeIn(600);
});
