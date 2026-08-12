const nombreRestaurante = "El gran lenguetazo";
const nombreCliente = "Erling Halland";
let estadoMesa = "libre";
let totalCuentaPagar = 0;
const esClienteVIP = true; // Tipo de dato Boolean: true o false

// El cliente entra y ocupa la mesa: cambiamos su estado
estadoMesa = "ocupada";

// El cliente pide un platillo de 25 dólares y una bebida de 5 dólares
totalCuentaPagar += 25; 
totalCuentaPagar += 5;

// ✅ BIEN: Usamos Backticks (``) para crear un mensaje limpio y legible
console.log(`El cliente ${nombreCliente} se ha sentado en una mesa que ahora está ${estadoMesa}.`);
console.log(`Su cuenta actual en el restaurante "${nombreRestaurante}" es de $${totalCuentaPagar}.`);

// Evaluamos condiciones para aplicar una regla de negocio
if (esClienteVIP) {
  // Se ejecuta si esClienteVIP es true
  console.log(`¡Gracias por volver, ${nombreCliente}! Aplicando trato VIP.`);
} else if (totalCuentaPagar > 50) {
  // Se ejecuta solo si la primera no se cumplió Y la cuenta supera los $50
  console.log("Cuenta elevada: Se le obsequia un café al cliente.");
} else {
  // Se ejecuta si ninguna de las condiciones anteriores fue verdadera
  console.log("Gracias por su compra.");
}

console.log(nombreRestaurante, nombreCliente, estadoMesa, totalCuentaPagar);