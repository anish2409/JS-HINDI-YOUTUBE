const name="Anish"
const repoCount = 50

//console.log(name + repoCount+ "value")

console.log(`Hello my name ${name} and my repo count is ${repoCount}` );

const gameName = new String ('anish-hc-com')

//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4)
//console.log(newString);

const anotherString = gameName.slice(-6,2)
//console.log(anotherString);

const newStringOne = "  anish  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))

console.log(gameName.split('-'))

