
const owner = "Lina"
const address = "Calle 1ra"

function dogGreeting(owner, address)
{
    console.log(`Hi, I am  ${this.dogName} and my owner is ${owner} and my address is ${address}`)
}

const newHouse = {
    dogName: "Doky"
}

dogGreeting.call(newHouse, owner, address)

const necessaryValues = [ owner, address]

dogGreeting.apply(newHouse,necessaryValues)