/* 
Proyecto: Personal Finance Tracker

Crear un sistema de control financiero personal utilizando JavaScript puro y Node.js, cuya interfaz inicial será exclusivamente la consola/terminal.

El sistema debe permitir al usuario crear y administrar categorías financieras. Cada categoría representará una fuente de ingresos, 
trabajo, negocio o cualquier actividad que el usuario quiera controlar de manera independiente.

Cada categoría deberá tener su propio historial de movimientos, donde se puedan registrar entradas y salidas de dinero.
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function menu() {
  console.log("\n=== PERSONAL FINANCE TRACKER ===");
  console.log("A - Registrar ingreso");
  console.log("B - Registrar gasto");
  console.log("C - Ver movimientos");
  console.log("X - Salir");

  rl.question("\nElige una opción: ", (option) => {
    switch (option.toUpperCase()) {
      case "A":
        console.log("Registrar ingreso...");
        menu();
        break;

      case "B":
        console.log("Registrar gasto...");
        menu();
        break;

      case "C":
        console.log("Ver movimientos...");
        menu();
        break;

      case "X":
        console.log("Hasta la próxima...");
        rl.close();
        break;

      default:
        console.log("Opción no válida");
        menu();
    }
  });
}

menu();
