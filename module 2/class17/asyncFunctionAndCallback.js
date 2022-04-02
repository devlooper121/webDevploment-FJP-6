const fs = require("fs");

console.log("Before");

fs.readFile("asycb.txt", cb1);
fs.readFile("asyncCallback.txt", cb2);
function cb1(error, data) {
    if(error){
        console.log(error);

    }else{
        console.log("data 1 : "+data);
    }
}

function cb2(error, data) {
    if(error){
        console.log(error);

    }else{
        console.log("data 2 : "+data);
    }
}

console.log("aftre");