//Creación de String

const simpleComillas = 'miVariable1'
const dobleComillas = "miVariable2"
const otrasComillas = `miVariable3`

console.log(simpleComillas, dobleComillas, otrasComillas)

// Concatenación 1. Opción +

const direccion = 'Calle 34'
const casa = 'casa 1'

const direccionCompletasinEspacio = 'La dirección es: ' + direccion + casa

console.log(direccionCompletasinEspacio)

const direccionCompletasConEspacio = 'La dirección es: ' + direccion + ' ' + casa

console.log(direccionCompletasConEspacio)

// Concatenación 2. Template Literals

const nombre = 'Lina'
const pais = '🌏'

const presetacion = `Hola, soy ${nombre} de ${pais}`
console.log(presetacion)

// Concatenación 3. join()
const primeraParte = 'Me encanta'
const segundaParte = 'la gente de: '
const terceraParte = '☃️'

const pensamiento = [primeraParte,segundaParte,terceraParte]
console.log(pensamiento.join(' '))

// Concatenación 4. concat()

const hobbie1 = 'Bailar'
const hobbie2 = 'Ver cine'
const hobbie3 = 'Caminar'

const hobbies = 'Mis hobbies son: '.concat(hobbie1, ', ',hobbie2, ', ',hobbie3, '.')

console.log(hobbies)










 