function add(n1 , n2){
    return n1+n2;
}

function mul(n1, n2){
    console.log("multiplication of two num "+n1*n2);
}

// we can store functions in javaScript
// because they are first class citizen in js
let sub = function substract(n1,n2){
    return Math.abs(n1-n2);
}

console.log(sub(12,34));
//IIFE -> Immediately Invoked Function Expression
(function(){
    console.log("hello from IIFE");
})();


console.log(mul(30,add(12,sub(16,8))));

(function(n1,n2){
    console.log("div "+ n1/n2);
})(23,4);
