const user ={
    username : "Anish",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username},welcome to website`);
    }
}
// user.welcomeMessage()
// user.username= "Bumba"
// user.welcomeMessage()

// function chai(){
//     let username = "anish"
//     console.log(this.username);
// }

// chai()

//  const chai = function (){
//      let username = "anish"
//      console.log(this.username);
//  }

 const chai =  () =>{
    let username = "anish"
    console.log(this.username);
}

//chai()
// ARROW FUNCTION 

// const addTwo =(num1,num2) => { // if {} is use ,use return keyword
//     return num1 + num2
// }
// console.log(addTwo(3,4))

//ARROW function run in another way 

const addTwo =(num1,num2) =>  num1 + num2// if {} is not use ,do not use return keyword
console.log(addTwo(3,4))




