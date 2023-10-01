//var c = 300
let a = 500
if(true){
    let a = 10
    const b = 20
    var c =30// avoid var
}



//console.log(a)
//console.log(b)
//console.log(c)

//Nested Scope

function one(){
    const username = "Anish"

    function two(){
        const website = "youtube"
        //console.log(username);

    }
   // console.log(website);

    two()

}
one()

if (true){
    const username = "Anish"
    if(username === "Anish"){
        const website= "youtube"
        console.log(username+website);
    }
}

// ++++++++++++++++++Interesting++++++++++++++++

addone(5)
function addone(num){// for this case we are declare a function in previously
    return num+1
}


const addTwo = function(num){//for this case we are declare a function after executing the function
    return num+2

}
addTwo(5)

