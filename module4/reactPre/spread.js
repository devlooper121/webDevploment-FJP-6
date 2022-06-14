let arr = [1,2,3,4];
//  make copy of arr

let arr2 = arr;

// console.log(arr);
// console.log(arr2);
arr2[2] = 55;
// both change because they point to same array in Heap
// console.log(arr);
// console.log(arr2);

// make a copy 

arr2 = arr.map(function(e) {return e});
arr2[2] = 110;
// only arr2 will change
// console.log(arr);
// console.log(arr2);

// COPY using spread operator 

arr2 = [...arr];
arr2[2] = 0;
// only arr2 is change
// console.log(arr);
// console.log(arr2);

// Spread operator in OBJECTS

let obj = {
    name : "David",
    address : {
        state : "New York",
        Zip: 1234
    }
}

// let obj2 = obj;
// obj2.name = "Dheeraj"; // both change 
obj2 = {...obj};
obj2.name = "Dheeraj"; // only obj2 change

// change address
obj2.address.state = "Bihar";
// both change because address is refering single object

obj2.address = {
    state : "BIHAR",
    Zip: 123456
} // only obj2 change because we just assign object 2 address with another object

/// #########################

// this is known as SHALLOW COPY  


// console.log(obj);
// console.log("**************************************************");
// console.log(obj2);


// for DEEP COPY USE JSON 

let obj3 = JSON.parse(JSON.stringify(obj));

obj3.address.state = "New YORK";


console.log(obj);
console.log("**************************************************");
console.log(obj3);