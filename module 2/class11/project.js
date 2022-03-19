// let lern about input in node js
const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");
// let inputArr = process.argv;

// console.log(inputArr);

let folderPath = process.argv[2];
// console.log(ourInput);
// task 2 check user provided path is valid or not

let folderExists = fs.existsSync(folderPath);

// task 3 how to diiferencite
const possibleExtentions = {
    audios: [".mp3",".amr",".m4a",".wav",".aac",".aiff",".alac",".m4b",".m4p",".wma",".raw"],
    videos : [".mp4",".asf", ".mkv","mpeg",".webm",".flv",".gif",".avi",".wmv",".amv",".m4v",".m4p",".mpg",".3gp",".flv"],
    documents : [".pdf",".csv",".doc",".docm",".docx",".dot",".dotm",".dotx",".htm",".html",".mht",".mhtml",".odt",".rtf",".txt",".wps",".xml",".xls",".xlsx",".ppt",".pptx"],
    Compressed : [".zip",".7z",".z",".tar.gz",".rar"],
    Applications : [".apk", ".app"],
    Softwares : [".deb",".rpm",".exe",".pkg",".msi",".iso",".gz"],
    Codes : [".c",".cpp",".java",".py",".js",".class",".obj"],
    Image : [".jpeg",".jpg",".png"]
}

// possible extention
if(folderExists){
    let allFiles = fs.readdirSync(folderPath);
    // console.log(allFiles);
    for(let i = 0; i < allFiles.length; i++){
        let extName = path.extname(allFiles[i]);
        if(extName == ""){
            continue;
        }
        // console.log(extName);
        let nameOfFolder = getFolderName(extName);
        // console.log("Ext--",extName,"Folder--",nameOfFolder);
        let newFolder = path.join(folderPath,nameOfFolder);
        if(!fs.existsSync(newFolder)){
            fs.mkdirSync(newFolder);
        }
        // let move
        let destPath = path.join(newFolder,allFiles[i]);
        let sourcePath = path.join(folderPath,allFiles[i]);
        fse.moveSync(sourcePath,destPath);
    }
}else{
    console.log("File does not Exist Provide a valid path!!");
}

function getFolderName(ext){
    for(key in possibleExtentions){
        let possibeFolder = possibleExtentions[key];
        for(var i = 0; i < possibeFolder.length; i++){
            if (possibeFolder[i]== ext){
                return key;
            }
        }
    }
    return "others";
}