// Q1 
// Q: List the side effect and convert the function to a pure function which does the same thing

let arr = [1, 2, 3, 4];

function f(arr) {
    for (x in arr) {
        arr[x] = 0
    }
    return arr;
}

// function x is making arr all element 0 so basicaly this is the sideffect

function g(arr){ 
    let ansArr = [];
    for(x in arr){
        ansArr[x] = 0;
    }
    return ansArr;
}

// console.log("Before",arr);
// console.log(g(arr));
// console.log("After",arr);

// Q 2 

// Q - Convert the following function "f" to a pure function and create an impure function g which is a higher order function which take result of f and print it like f does it here.

let obj = {
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    length: 5,
  };
  
function f(obj) {
    let nObj = {};
    for (let i = 1; i < obj.length; i++) {
        nObj[i] = obj[i] + 1;
    }
    nObj["5"] = 4;
    return nObj;
}

function g(fn){
    let op = fn(obj);
    for(let x in op){
        console.log(`at index ${x} we have value ${op[x]}`);
    }
}

// g(f);

// Q3 
// Q - Write a function f that returns product of x and y with both of the following function calls

// f(x, y)
// f(x)(y)

function f(x,y){
    if(x!=undefined && y!=undefined){
        return x+y;
    }else if (x==undefined && y==undefined){
        return "No argument found";
    }
    else if(y==undefined){
        return function (y){
            return x+y;
        }
    }
}

// console.log(f(2)(9));

// Q4 

// Q find the output of the following code 

let a = ["a", "b"]
a[2] = a 

function f(a) {
    a = a[2]
    // console.log(a);
    let n = Array("a", "b")
    console.log(a[2] = n);
    // console.log(a);
    // console.log(n);
    // a = n;
    // console.log(a);
}


console.log(a);
// for(let x in a){
//     console.log(a[x]);
// }
f(a)
console.log(a);

// Options:

// 1)
// ["a", "b", ["a", "b"]]
// ["a", "b"]
// ["a", "b", ["a", "b"]]
// ["a", "b", ["a", "b"]]
// ["a", "b"]
// ["a", "b"]
// ["a", "b", ["a", "b"]]



// 2)
// [ 'a', 'b', [Circular] ]
// [ 'a', 'b', [Circular] ]
// [ 'a', 'b' ]
// [ 'a', 'b', [ 'a', 'b' ] ]
// [ 'a', 'b' ]
// [ 'a', 'b' ]
// [ 'a', 'b', [ 'a', 'b' ] ]