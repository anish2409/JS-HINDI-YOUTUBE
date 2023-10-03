// if

// if (score>100){
//     let power = "fly"
//     console.log(`User power "$ {power}`);

// }
// console.log(`User power "$ {power}`);

// }

//const balance =1000
//if (balance>500)  console.log("test");

// if (balance < 500) {
//     console.log("less than 500");
// }
// else if (balance<750) {
//     console.log("less than 750");
// }
// else  {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User Logged In ");
}

    
