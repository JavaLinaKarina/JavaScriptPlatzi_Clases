function Rocket(name)
{
    this.name = name
    this.launchMessage = function(){
        console.log('run')
    }

}

const falconRocket = new Rocket('Falcon 9')
const falconHeavyRocket = new Rocket('Falcon Heavy')
console.log(falconRocket.name)
console.log(falconRocket.launchMessage())