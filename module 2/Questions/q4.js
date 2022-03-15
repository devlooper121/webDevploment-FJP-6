// read content of unorganised folder and make  an array which has extension name of each file
const path = require("path");
const fs = require("fs");

let unorganisedFolderDownload = "C:\\Users\\dheer\\Downloads";
let allContent = fs.readdirSync(unorganisedFolderDownload);
let allExtName = [];

for(var i = 0; i < allContent.length; i++){
    pathsOfAll = path.join(unorganisedFolderDownload,allContent[i]);
    extName = path.extname(pathsOfAll);
    // console.log(extName);
    if(allExtName.indexOf(extName) == -1){
        allExtName.push(extName);
    }
}
console.log(allExtName.sort());