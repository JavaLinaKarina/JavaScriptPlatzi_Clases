// paso por valor

let x = 1
let y = 'hola'
let z = null

let a = x
let b = y
let c = z
console.log(x,y,z, a,b,c)

 a = 12
 b = 'platzi'
 c = undefined

 console.log(x,y,z, a,b,c)

// paso por referencia
let frutas = ['manzana']
console.log(frutas)
frutas.push('pera')
console.log(frutas)

let flores = ['🌷']
let copiaFloress = flores

console.log(flores)
flores.push('🍀')  
console.log(flores) 

