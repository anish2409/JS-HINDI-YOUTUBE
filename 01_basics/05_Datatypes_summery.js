// primitive 

//7 types :String ,Number,Boolean ,null,undefiend,bigint


//Reference(Non primitive)

//array,objects,functions

const score = 100

const isLoggedIn = false
const  outsideTemp = null
let userEmail ;
const id = Symbol('123')
const anotherId= Symbol('123')

//console.log(id === anotherId);


const bigNumber = 58812257412685225555n

//Reference (Non primitive)


//Array , Objects, Functions

const heros =[ "shaktiman","naagraj","doga"]

let myObj = {
    name:"hitesh",
    age:22,

}

const myFunction = function(){
    //console.log("Hello World");
}

//console.log(typeof myFunction)


//Stack (Primitive) , Heap (Non -Premitive)
let myYoutubename = "anishDas"

let another = myYoutubename
anothername = "chaiorcode"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo = userOne
userTwo.email = "anish@google.com"
console.log(userOne)
console.log(userTwo)