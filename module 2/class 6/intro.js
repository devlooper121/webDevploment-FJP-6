// console.log("hello bhai");
// // alert("hjdfbghjv");clear

// function n(n){
//     while(n >0){
//         console.log(n +" inner");
//         n--;
//     }
// }

// function nn(m){
//     if(m > 0){
//         console.log(m+" outer.");
//         n(m);
//         nn(m-1);
        
//     }
// }

// nn(5);

function isPrime(n){
    if(n < 2){
        console.log(n+ " is not prime");
        return false;
    }
    for(let i = 2 ; i*i <= n; i++){
        if(n%i == 0){
            console.log(n+" is not prime");
            return false;
        }
    }
    console.log(n+" is prime");
    return true;
}
let count = 0;
for(let i = 0; i <= 100; i++){
    if(isPrime(i)){
        count++;
    }
    if(i == 96){
        return; // chalta hai 😊
    }
}
console.log("total no of prime is "+count);