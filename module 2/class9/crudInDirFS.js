const fs = require("fs");

const path = require("path");

// console.log(fs);
// create a dir

// if(!fs.existsSync("newDirByCode")){
//     fs.mkdirSync("newDirByCode");
// }else{
//     console.log("This dir exist already.")
// }
// read directory
let patOfDirToRead = "C:\\Users\\dheer\\OneDrive\\Documents\\Develoment\\FJP-6\\module 1"

let contentOfDir = fs.readdirSync(patOfDirToRead); // this return a list
console.log(contentOfDir);
// delete a dir
// fs.unlinkSync("newDirByCode"); // not work on dir it work on file

// fs.rmdirSync("newDirByCode") // this only work on empty dir

// copy file

// let sourcePath = path.join(__dirname,"newDirByCode","abc.txt");

// let destinationPath = path.join(__dirname,"..","..","abc.txt"); // adding ".." will take one folder back from cwdr or __dirname 
// console.log(sourcePath);
// console.log(destinationPath);

// fs.copyFileSync(sourcePath, destinationPath);