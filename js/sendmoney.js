// Enviar dinero y agregar nuevo contacto

const listaContactos = document.getElementById("listaContactos");
const montoInput = document.getElementById("monto");

function renderizarContactos() {
  const contactos = obtenerContactos();
  listaContactos.innerHTML = "";

  contactos.forEach(function (contacto) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML =
      contacto.nombre +
      ' <span class="badge bg-light text-dark me-2">' + contacto.alias + "</span>" +
      '<button type="button" class="btn btn-sm btn-primary btn-enviar">Enviar</button>';

    li.querySelector(".btn-enviar").addEventListener("click", function () {
      enviarDinero(contacto);
    });

    listaContactos.appendChild(li);
  });
}

function enviarDinero(contacto) {
  const monto = Number(montoInput.value);

  if (!monto || monto <= 0) {
    alert("Ingresa un monto válido.");
    return;
  }

  const saldoActual = obtenerSaldo();

  if (monto > saldoActual) {
    alert("No tienes saldo suficiente.");
    return;
  }

  guardarSaldo(saldoActual - monto);

  agregarTransaccion({
    detalle: "Enviado a " + contacto.nombre,
    monto: -monto,
    fecha: fechaHoy(),
  });

  alert("Enviaste " + formatearSaldo(monto) + " a " + contacto.nombre + ".");
  window.location.href = "transactions.html";
}

// Agregar nuevo contacto (modal)
const formNuevoContacto = document.getElementById("formNuevoContacto");

formNuevoContacto.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("contactName").value.trim();
  const alias = document.getElementById("contactAlias").value.trim();

  if (nombre === "" || alias === "") {
    alert("Completa el nombre y el alias.");
    return;
  }

  const contactos = obtenerContactos();
  contactos.push({ nombre: nombre, alias: alias });
  guardarContactos(contactos);

  formNuevoContacto.reset();
  renderizarContactos();

  const modalElement = document.getElementById("newContactModal");
  const modal = bootstrap.Modal.getInstance(modalElement);
  modal.hide();
});

renderizarContactos();

// Autocompletar / filtrar contactos mientras se escribe (con jQuery)
$("#search").on("keyup", function () {
  const texto = $(this).val().toLowerCase();

  $("#listaContactos li").each(function () {
    const contenido = $(this).text().toLowerCase();
    $(this).toggle(contenido.includes(texto));
  });
});
