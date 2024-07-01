
/* example switch estructure
switch(expression)
    {
        case value_1:
        //code to execute
        break
        case value_2:
        //code to execute
        break
        default:
        //code to execute   
    }*/

let fruit = "mango"
switch (fruit) {
    case "Orange":
        console.log("Oranges cost $1.50 euros the pound")
        break
    case "Papaya":
        console.log("Papayas cost $3.99 euros the pound")
        break
    case "Lemon":
        console.log("Lemons cost $2 euros the pound")
        break
    case "strawberry":
    case "grape":
        console.log("strawberries and grapes cost $2.50 euros the pound")
        break
    default:
        console.log(`Sorry we don't have with ${fruit}`)

}

console.log("Is there anything do you want?")
