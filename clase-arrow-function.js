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




