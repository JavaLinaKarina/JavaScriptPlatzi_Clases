//Enlace implicíto o implicit binding

const house= {
    dogName :"Doky",
    dogGreeting: function(){
        console.log(`Hi, I'm ${this.dogName}`)
    }

}

house.dogGreeting()

/*******/

//Enlace explicíto o explicit binding

function dogGreeting(){
    console.log(`Hi, I'm ${this.dogName}`)
}

const newHouse = {
    dogName : "Doky for ever"
}

dogGreeting.call(newHouse)

/*******/

function newDogGreeting(owner, address){
    console.log(`Hi, I'm ${this.dogName} and I live with my ${owner} and this is my address ${address}`)
}

const owner = "Lina"
const address = "Benicario 3"

newDogGreeting.call(newHouse, owner, address)

