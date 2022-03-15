// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type

let arrFilesType=["audio","video","image","software","documents","applications","other"];
let arrFilesExt=[".mp3",".mp4",".jpeg",".apk",".pdf",".deb",".zip"];


const path = require("path");
const fs = require("fs");
let newFolderPath = "question2Dir"
if(!fs.existsSync(newFolderPath)){
    fs.mkdirSync(newFolderPath);
}

for(let i = 0; i < arrFilesType.length; i++){
    let nextFolderName = path.join(__dirname,newFolderPath,arrFilesType[i]);
    if(!fs.existsSync(nextFolderName)){
        fs.mkdirSync(nextFolderName);
    }
    // now we are generating 4 files of each type
    for(let j = 0; j < 4; j++){
        let eachFileName = path.join(nextFolderName,arrFilesType[i]+j+arrFilesExt[i]);
        fs.writeFileSync(eachFileName,"this is a "+arrFilesType[i]+" type file");
    }
}

console.log(fs.readdirSync(newFolderPath));

