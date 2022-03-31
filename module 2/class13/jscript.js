/*
console.log(a);

var a = 10;

console.log(a);

function fun(){
    var b = 20;
    return b;
}

console.log(c);
var c = 111;
var d = fun();

console.log(d);
// console.log(b);  // error

*/

fun(); // code error dega because undefined ko call kr rha hai

var fun = function(){
    console.log("Hello World");
}

fun();