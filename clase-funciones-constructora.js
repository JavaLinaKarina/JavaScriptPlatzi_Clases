/*function Rocket(name, ownMessage)
{
    this.name = name
    this.launchMessage = function(){
        console.log(ownMessage)
    }

}

const falconRocket = new Rocket('Falcon 9', 'Good bye Everybody')
const falconHeavyRocket = new Rocket('Falcon Heavy', 'Good bye somebody')
console.log(falconRocket.name)
console.log(falconRocket.launchMessage())*/

/********************/

function Rocket2(name2, ownMessage2)
{
    this.name2 = name2
    this.launchMessage = () => ownMessage2

}

const falconRocket2 = new Rocket2('Falcon Heavy2', 'Good bye somebody2')
console.log(falconRocket2.name2)
console.log(falconRocket2.launchMessage())

/* with arrowFunction*/

const RocketWithArrowFunction = (name, message) =>({
    name: name,
    launchMessage: message
})

const personalizedMessage = () => 'a sunny afternoon'

const falcon3= RocketWithArrowFunction('MyFalcon', personalizedMessage)
console.log(falcon3.name)
console.log(falcon3.launchMessage())

