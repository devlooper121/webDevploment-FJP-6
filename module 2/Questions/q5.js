//move a file
const path = require("path");
// const fse = require("fs-extra");
const fs = require("fs");
let sourcePath = path.join(__dirname,"..","..","abc.txt");
let destpath = path.join(__dirname,"abc.txt");

if(fs.existsSync(sourcePath)){
    fs.copyFileSync(sourcePath,destpath);
    fs.unlinkSync(sourcePath);
}



// if(fs.existsSync(sourcePath)){
//     fse.moveSync(sourcePath,destpath);
// }else{
//     console.log("file not exist.")
// }