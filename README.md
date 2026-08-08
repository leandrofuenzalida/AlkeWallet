# Alke Wallet

Billetera digital desarrollada como proyecto integrador del Módulo 2 (Fundamentos del desarrollo Front-end) de Alkemy. Permite iniciar sesión, ver el saldo, depositar, retirar, enviar dinero a contactos y revisar el historial de movimientos.

## Tecnologías

- HTML5
- CSS3 (paleta y tipografía propias)
- Bootstrap 5
- JavaScript
- jQuery
- `localStorage` para simular persistencia de datos (no hay backend)

## Cómo probarlo

1. Clona el repositorio.
2. Abre `index.html` en el navegador (no necesita servidor ni instalación).
3. Iniciá sesión con las credenciales de prueba:
   - Email: `demo@alkewallet.com`
   - Contraseña: `123456`

## Pantallas

- `index.html` — Bienvenida, acceso a login.
- `login.html` — Inicio de sesión con validación de credenciales.
- `menu.html` — Menú principal, saldo actual y navegación.
- `deposit.html` — Depósito de fondos.
- `withdraw.html` — Retiro de fondos.
- `sendmoney.html` — Envío de dinero a contactos, con buscador y alta de nuevos contactos.
- `transactions.html` — Historial de movimientos.

## Estructura del proyecto

```
AlkeWallet/
├── index.html
├── login.html
├── menu.html
├── deposit.html
├── withdraw.html
├── sendmoney.html
├── transactions.html
├── css/
│   └── styles.css
└── js/
    ├── login.js
    ├── menu.js
    ├── deposit.js
    ├── withdraw.js
    ├── sendmoney.js
    ├── transactions.js
    ├── saldo.js
    ├── contactos.js
    └── transacciones.js
```

## Notas

El saldo, los contactos y las transacciones se guardan en el `localStorage` del navegador, por lo que los datos son locales a cada dispositivo/navegador y se pueden reiniciar borrando el almacenamiento del sitio.
