// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB Connected`);
})();

((name) =>{
    console.log(`DB Two  Connected ${name}`);
})('anish');


