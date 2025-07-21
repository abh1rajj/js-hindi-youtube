// singletons
//object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    "full name" : "Abhiraj Tauhid",
    name: "abhiraj",
    [mySym] : "mykey1",
    age : 18,
    location : "bangalore",
    email : "abhiraj@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "abhiraj@openai.com"
// Object.freeze(JsUser)
JsUser.email = "abhiraj@anthropic.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greeting = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());