const fs = require("fs");
const file = require("fs-extra/lib/ensure/file");
const fileArr = ["./f1.txt","./f2.txt","./f3.txt","./f4.txt","./f5.txt"];
let filePromise = fs.promises.readFile(fileArr[0],"utf-8");

for(let i = 1; i < fileArr.length; i++){
    filePromise = filePromise.then(function(data){
        console.log(data);
        let newFilePromise = fs.promises.readFile(fileArr[i], "utf-8");
        return newFilePromise;
    })
}
// last promise only returns not print so do it saperately
filePromise.then(function(data){
    console.log(data);
})
