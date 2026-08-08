// Muestra el saldo actual en el Menú Principal

const saldoTexto = document.getElementById("saldo");
saldoTexto.textContent = formatearSaldo(obtenerSaldo());
