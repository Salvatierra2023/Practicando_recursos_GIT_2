const nombreRestaurante = "El gran lenguetazo";
const nombreCliente = "Erling Halland";
let estadoMesa = "libre";
let totalCuentaPagar = 0;

// Haland pide un platillo de 45 dolares y un postre que cuesta 12 dolares y un descuento de 5 dolares
totalCuentaPagar += 45;
totalCuentaPagar += 12;
totalCuentaPagar -= 5;

console.log(`El cliente "${nombreCliente}" tiene una cuenta final de $${totalCuentaPagar} en ${nombreRestaurante}.`)

// Evaluando condiciones para aplicar una regla de negocio

if (totalCuentaPagar >= 50) {
    console.log(`El cliente ${nombreCliente} recibe un postre gratis por su consumo.`)
} else if ((totalCuentaPagar > 20)) {
    console.log(`El cliente ${nombreCliente} recibe un cupón del 10% para su próxima visita.`)
} else {
    console.log(`Gracias por visitar ${nombreRestaurante}, ¡vuelva pronto!`)
}

// Imprimir los 5 platillos de muestra para los primeros 5 clientes de la fila

for(let numeroDePlatillo = 1; numeroDePlatillo <= 5; numeroDePlatillo++) {
    console.log(`Platillo de muestra ${numeroDePlatillo} entregado con éxtio.`)
}
console.log(`¡Se han agotado todas las muestras del día!`)