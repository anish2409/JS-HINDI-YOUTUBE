//for in
const myobj = {
    js:'javascript',
    cpp: 'C++',
    rb : "ruby",
    swift : "swift by apple"
}
for (const key in myobj){
    console.log(`${key} shortcut is for ${myobj[key]}`);
}

const programming = ["js","rb","python","java","cpp"]
for (const key in programming){
    console.log(programming[key]);
}