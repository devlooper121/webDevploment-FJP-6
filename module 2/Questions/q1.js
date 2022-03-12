//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

const path = require("path");
const fs = require("fs");

// making a folder
let nameOfNewDir = "question1Dir";
// create in same dir
// __dirname give us current file dir so we are good to go
if(!fs.existsSync(nameOfNewDir)){
    fs.mkdirSync(nameOfNewDir);
} else{
    console.log("dir "+nameOfNewDir+" exist already");
}
// creating new file in new dir
let pathOfNewFile = path.join(__dirname,nameOfNewDir,"fileQ1.txt");

fs.writeFileSync(pathOfNewFile, "new file has been made 😉");
fs.appendFileSync(pathOfNewFile,"\nQuestion complited.")