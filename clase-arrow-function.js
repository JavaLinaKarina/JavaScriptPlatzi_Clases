const greeting = function(name){
    return `Hi, my name is ${name}`
}


//Arrow -function explicit return
const newGreeting = (name)=> {
     return `Hi, my New name is ${name}`
}

console.log(greeting("Lina"))
console.log(newGreeting("Karina"))

//Arrow -function implicit return

const newGreetingImplicit = name => `Hello, I am ${name}`
const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hello, I am ${name} ${lastName}`

console.log(newGreetingImplicit("Susana"))
console.log(newGreetingImplicitWithTwoParameters("Luisa", "Carmiño"))

//Lexical Binding 

const finctionalCharacter={
    
    name:'Uncle Ben', 
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction:(message)=>{
        console.log(`${this.name} says: ${message}`)
    
    }
}
finctionalCharacter.messageWithTraditionalFunction('With great power comes great responsability.')
finctionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.')

console.log("Agregando cambios nuevos")
