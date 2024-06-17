// 1. Strings primitivos

const stringPrimitivo = 'hola soy un string primitivo'
console.log(typeof stringPrimitivo) 

const stringPrimitivoTambien = String('hola también soy un string primitivo')
console.log(typeof stringPrimitivoTambien) 

//string objeto

const stringObjeto = new String('hola soy un string objeto')
console.log(typeof stringObjeto) 

//Acceder a caracteres

const saludo = 'Hola!. Cómo estás?'

console.log(saludo[2])
console.log(saludo.charAt(2))
console.log(saludo.indexOf('o'))
console.log(saludo.indexOf('Cómo'))//muestra el índice desde donde comienza la palabar 'Cómo'
console.log(saludo.indexOf('cómo'))// conocer si existe una palabra en un texto, si no exise se imprime en pantalla -1
console.log(saludo.lastIndexOf('o'))// conocer la posición de una letra por ejemplo la última 'o'
console.log(saludo.slice(3, 7)) //conocer las letras que hay entre un rango de indices ej: posición desde la 1 hasta el cierre de signo ! ( 6 + 1 posición)
console.log(saludo.length)
console.log(saludo.toUpperCase())
console.log(saludo.toLowerCase())

const saludoDividido = (saludo.split(' '))//guardar el string en una nueva variable pasandole el método split para dividir
console.log(saludoDividido)










 