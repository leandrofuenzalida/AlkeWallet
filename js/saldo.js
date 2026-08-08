// Manejo del saldo de la cuenta (se guarda en el navegador con localStorage)

const SALDO_INICIAL = 1000000;

function obtenerSaldo() {
  const guardado = localStorage.getItem("saldo");

  if (guardado === null) {
    return SALDO_INICIAL;
  }

  return Number(guardado);
}

function guardarSaldo(saldo) {
  localStorage.setItem("saldo", saldo);
}

function formatearSaldo(saldo) {
  return "$ " + saldo.toLocaleString("es-CL");
}
