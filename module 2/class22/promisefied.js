function promisiFied(){
    return new Promise(function(resolve, reject){
        let a = 1;
        let b = 11;
        if(a === b) {
            resolve("equal");
        }else{
            reject("unequal");
        }
    })
}

let a = promisiFied();
console.log(a);
a.then(function(x){
    console.log(x);
})
a.catch(function(y){
    console.log(y);
})