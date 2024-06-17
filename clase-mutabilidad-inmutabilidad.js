//tipo de dato - primitivo inmutable

let numero = 23
numero = numero + 10
console.log(numero)

let isTrue = 'verdadero'
isTrue = 'false'
console.log(isTrue)

//tipo de dato - Complejo Mutable
let usuario = {nombre : 'Leo', edad : 20}
console.log(usuario)
usuario.edad = 35
console.log(usuario)

//Arrays
let frutas = ['manzana', 'pera']
console.log(frutas)
frutas[0] = 'banano'
console.log(frutas)

//Functions
function cambiarNombre(objeto){
    objeto.nombre = 'Nuevo Nombre'
}

let persna = {nombre : 'Pedro'}
console.log(persna)

cambiarNombre(persna)
console.log(persna)

var nombeLuisa = 'luisa'
console.log(nombeLuisa)
//document.write("nombeLuisa")

