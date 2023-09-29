// singleton

//Object literals
const mySym = Symbol("key1")

const jsUser = {
    name : "Anish",
    [mySym]:"mykey1",
    location:"Jaipur",
    email: "anish@google.com",
    isLoggedIn : false,
    lastLoginDays :["Monday","Saturday"]

}

// console.log(jsUser.email);//mostly use
// console.log(jsUser["email"]);//right way to denote and special case use
// console.log(jsUser[mySym])//Because it is a symbol

jsUser.email = "anish@chatgpt.com"//"=" for overwrite the value
//Object.freeze(jsUser)//Do not change the value ,for freeze function


jsUser.greeting = function(){
    console.log("Hello Js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());