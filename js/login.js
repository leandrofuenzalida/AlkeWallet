// Validación de credenciales - Pantalla de login

// Usuario de prueba (simulado, todavía no hay backend)
const emailValido = "demo@alkewallet.com";
const passwordValido = "123456";

const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Completa el email y la contraseña.");
    return;
  }

  if (email === emailValido && password === passwordValido) {
    window.location.href = "menu.html";
  } else {
    alert("Email o contraseña incorrectos.");
  }
});
