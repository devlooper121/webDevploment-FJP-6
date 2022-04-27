const fs = require("fs");

let filePromise = fs.promises.readFile("./f1.txt");
filePromise.then(function(data){
    console.log(data+"");
    let filePromise = fs.promises.readFile("./f2.txt");
    return filePromise;
}).then(function(data){
    console.log(data+"");
    let filePromise = fs.promises.readFile("./f3.txt");
    return filePromise;
}).then(function(data){
    console.log(data+"");
    let filePromise = fs.promises.readFile("./f4.txt");
    return filePromise;
}).then(function(data){
    console.log(data+"");
    let filePromise = fs.promises.readFile("./f5.txt");
    return filePromise;
}).then(function(){
    console.log("finish");
})