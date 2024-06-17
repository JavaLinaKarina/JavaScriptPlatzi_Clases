// 1. tipo Entero y tipo Decimal

const entero = 30
const decimal = 3.14

console.log(typeof entero, typeof decimal)

// 2. Notación cientifica
const cientifico = 5e3
console.log(cientifico)

//3. Infinitos y Nan

const infinito = Infinity
const noEsNumero = NaN

// Operaciones Aritmeticas

const suma = 4 + 5
const resta = 6 - 9
const multiplicacion = 5 * 8
const division = 16 / 2

// Módulo y Exponenciación

const modulo = 15 % 8
const expo = 2 ** 2

//precisión
const sumaDecimales = 0.1 + 0.2
console.log(sumaDecimales)
console.log(sumaDecimales.toFixed(1))
console.log(sumaDecimales === 0.3) // aquí compara tanto el tipo como el valor de la variable, por lo cual muestra false

//Operaciones avanzadas

const raizCuadrada = Math.sqrt(81)
const valorAbsoluto = (-10)
const numeroAleatorio = Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(numeroAleatorio)

