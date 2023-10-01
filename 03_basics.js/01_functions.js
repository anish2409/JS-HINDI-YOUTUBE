function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");

}
//sayMyName()

//function Add two numbers
// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }
// addTwoNumbers(3,5)

function addTwoNumbers(number1, number2){
         //let result=number1+number2;
         //return result
         return number1+number2
     }
    const result = addTwoNumbers(3,5)
    //console.log("Result", result);

function loginUserMessage(username){
    if(!username){
        console.log("Please entera user name");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("anish"))