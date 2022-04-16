const fs = require("fs");

let f1KaPromices = fs.promises.readFile("despacito.txt");

let f2KaPromices = fs.promises.readFile("favSong1.txt");

f1KaPromices.then(function(data){
    console.log(data+"");
})
f1KaPromices.catch(function(error){
    console.log(error);
})
f2KaPromices.then(function(data){
    console.log(data+"");
})
f2KaPromices.catch(function(error){
    console.log(error);
})
console.log("kjhdjcskjdhckjshckjsdhkjsdhksd");