function sayMyName () {
console.log("A");
console.log("B");
console.log("H");
console.log("I");
console.log("R");
console.log("A");
console.log("J");
}

// sayMyName()

// function addTwoNumbers (number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers (number1, number2){

    // let result = number1 + number2
    // return result
 return number1 + number2
}


const result = addTwoNumbers(3,4)

// console.log("Result: ", result );

// function loginUserMessage(username = "sam" ){
//     if(!username){
//         console.log("Please enter a username");
//         return 
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage("abhiraj"));


function calculateCartPrice(val1, val2,...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username : "abhiraj" , 
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}

// handleObject(user)
handleObject({
    username : "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 800, 100, 600]));
