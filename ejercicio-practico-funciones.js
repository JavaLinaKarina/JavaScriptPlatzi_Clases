//Create powerpuffgirl with objects

function PowerpuffGirl(name, color, superPower){
    this.color = color
    this.name = name
    this.superPower = superPower
    this.isLeader = false

    this.displayInfo = function(){
        console.log(`PowerPuff Girl Information:  
        Name: ${this.name}
        Color: ${this.color}
        Power: ${this.superPower}`
    )
    }
    this.becomeLeader=function(){this.isLeader=true
    console.log(`${this.name} has become the leader of the Powerpuff Girls !`)}}
}


const blossom = new PowerpuffGirl("Lina", "Pink", "Automatizer")
const violet = new PowerpuffGirl("Violet", "Purple", "Big team-player")
const sad = new PowerpuffGirl("Sad", "Grey", "being blue")

blossom.displayInfo()
violet.displayInfo()
sad.displayInfo()

blossom.becomeLeader()
blossom.displayInfo()
buttercup.displayInfo()
bubbles.displayInfo()

