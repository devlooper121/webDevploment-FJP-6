const fs = require("fs");

console.log("Before");

fs.readFile("request.js", cbf);

function cbf(error, data){
    if(error){
        console.log(error);
    }else{
        console.log(data+ " ");
    }
}

console.log("after")