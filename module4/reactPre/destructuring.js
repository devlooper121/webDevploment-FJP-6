let arr = [1,22,33,44];

// let [a,b,c,d] = arr;

// console.log(a,b,c,d);

// let [a,b] = arr;

// console.log(a,b);

// let [a,b,c,d,e] = arr;

// console.log(a,b,c,d,e);

let [a,b,c=10,d,e=11] = arr; // this work like default poaramameter 

console.log(a,b,c,d,e);

/// **************** in OBJ ******************************//

let obj = {
    name : "Dheeraj",
    state: "Bihar",
    pin : 123456
}

// let {name, pin, state} = obj;
// console.log(name, state, pin);
let {name:myName, pin:myPin, state} = obj;


console.log(myName, state, myPin);

// in nested object
let obj2 = {
    name : "Dheeraj",
    address : {
        countary : "INDIA",
        state : {
            stateName: "Bihar",
            pin : 12134,
        }        
    }
}

let {address} = obj;
let {address:{countary:cd}} = obj;
let {address:{state:{pin}}} = obj