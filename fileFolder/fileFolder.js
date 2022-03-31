const path = require("path");
const fs = require("fs");

const fsr = require("fs-extra");

let files = fs.readdirSync(__dirname);
// console.log(files)
for(let i = 0; i < files.length; i++){
    let FileName1 = path.basename(files[i]).split(".");
    let FileName = FileName1[0];
    console.log(FileName);
    let folderPath = path.join(__dirname,FileName);
    if(path.extname(files[i]) == ""){
        continue;
    }
    if(!fs.existsSync(folderPath)){
        fs.mkdirSync(folderPath);
    }
    let source = path.join(__dirname,files[i]);
    let dest = path.join(folderPath,files[i]);
    fsr.moveSync(source,dest);
}