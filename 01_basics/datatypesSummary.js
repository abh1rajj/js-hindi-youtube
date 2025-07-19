// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 239284013043090n



// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["shaktimaan", "nagraaj", "doga"]
let myObj = {
    name: "abhiraj",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof anotherId);
// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++ //

// Stack (Primitive), Heap (Non-primitive)

let myYoutubename = "hiteshchaudhury.com"

let anotherName = myYoutubename
anotherName = "Chaiaurcode"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// In stack, we get a copy 
// In heap, we get a reference i.e. changes are made to the original value