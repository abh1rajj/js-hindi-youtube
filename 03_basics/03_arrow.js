const user = {
    username: "abhiraj",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this); 
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "abhiraj"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "abhiraj"
//     console.log(this.username);    
// }

const chai =  () => {
    let username = "abhiraj"
    console.log(this.username);    
}


// chai()

// const addTwo =(num1, num2) => {       
//     return num1 + num2
// }   //if curly braces used, have tu use return keyword

// const addTwo =(num1, num2) => num1 + num2

// const addTwo = (num1,num2) => (num1 + num2) //if paranthesis, no retun word used

const addTwo = (num1,num2) => ({username: "abhiraj"})

console.log(addTwo(3,4)) 