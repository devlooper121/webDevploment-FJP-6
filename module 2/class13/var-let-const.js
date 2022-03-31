/***************** LET */
// console.log(a); // hoisting not allowed ( they are tempraly in dead zone )
let a; // declaration
console.log(a); // access

a  =200;

// let  a = 20000; // not allowed in let but allowed in var
// let a = "dsd"; 
//**************** VAR */
console.log|(b); // hoisting allowed

var b = 40;

console.log(b); 

b = 400;

var b = 4000;

console.log(b);

var b = "gfdg";

console.log(b);

/*********** CONST */
// console.log(c); // TDZ
// const c; // not allowed
const c = 50; 
console.log(c)
// c = 5000; // not allowed

console.log(c)