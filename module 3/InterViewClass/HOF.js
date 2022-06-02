// higher order functions
// a function which not change anything outside the function itself
// not even console.log

// map = 

let arr = [1,2,3,4,5,6,7,8,9];

let newArr = arr.map(cb);
function cb(x){
    return x*5;
}
console.log(newArr);
console.log(arr);

// filter

let newFilterArr = arr.filter((x)=>{
    return x%2==0;
})

console.log(newFilterArr);

// reduce

let addArr = arr.reduce((prev,curr)=>{
    return prev+curr;
})

console.log(addArr);

// let implementation of map()

function myMap(arr, cb){
    let newArr = [];
    for(x in arr){
        newArr[x] = cb(arr[x]);
    }
    return newArr;
}

let myMapWork = myMap(arr,cb);

console.log(myMapWork);


// let filter implementation

function myFilter(arr, cb){
    let newArr = [];
    for(x in arr){
        if(cb(arr[x])){
            newArr.push(arr[x]);
        }
    }
    return newArr;
}

let myFilterWork = myFilter(arr, (x)=>{
    return x%2!=0;
});
console.log(myFilterWork);


// my reduce;

function myFilter(arr, cb){
    let newArr = [];
    let prev = arr[0];
    let 
    for(x in arr){
        if(cb(arr[x])){
            newArr.push(arr[x]);
        }
    }
    return newArr;
}