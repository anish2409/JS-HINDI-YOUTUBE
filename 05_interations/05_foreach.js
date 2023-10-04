const coding = ["js","rb","python","java","cpp"]

// coding.forEach( function (item) { // callback function
//     console.log(item);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding =[
    {
        languageName : "javascript",
        languageFileName : "js"
    },

    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "java",
        languageFileName : "java"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})

// const values = coding.forEach((item)=>{
//     return item
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums=myNums.filter((num)=>num>4)//Using arrow function in one line

//or

// const newNums = myNums.filter((num)=> {//Using arrow function in multiple line

//     return num>4
// })


const newNums = []
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})

console.log(newNums);