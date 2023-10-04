const myNums = [1,2,3]

// Reduce Function

/*const myTotal = myNums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval : ${currval} `);
    return acc + currval
},0)*/

//console.log(myTotal)

// Reduce Function by Using Arrow function
const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)


console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price :2999
    },
    {
        itemName: "python course",
        price :4999
    },
    {
        itemName: "java DSA course",
        price :9999
    },
    {
        itemName: "Data Science course",
        price :12999
    },

]
const pricePay = shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(pricePay);