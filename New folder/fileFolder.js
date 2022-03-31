const path = require("path");
const fs = require("fs");

const fsr = require("fs-extra");

let files = fs.readdirSync(__dirname);

for(let i = 0; i < files.length; i++){
    let FileName = path.basename(files[i]);
    let folderPath = path.join(__dirname,FileName);
    if(path.extname(files[i]) == ""){
        continue;
    }
    fs.mkdirSync(folderPath);
    let source = path.join(__dirname,files[i]);
    let dest = path.join(folderPath,files[i]);
    fsr.moveSync(source,dest);
}