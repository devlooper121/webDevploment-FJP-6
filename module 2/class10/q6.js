//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Vidoe File
//            fsd.jpeg -> print Image File

const path = require("path");
const fs = require("fs");
const os = require("os");

let homeDir = os.homedir();

// console.log(fs.readdirSync(homeDir));
let DownloadsFolderName = path.join(homeDir,"Downloads");
// fileTypes obj
let fileTypes = {
    Audio : [".mp3", ".wav", ".m4a",".aac"],
    Video : [".mp4",".mkv",".avi",".mpeg"],
    Image : [".jpeg",".jpg",".png"],
    Application : [".apk",".exe"],
    Document : [".pdf",".excel",".docx",".doc",".ppt",".pptx"],
    Software : [".c",".cpp",".java",".py",".js"],
    Compressed : [".zip", ".7z", ".deb",".pkg",".rar"]
}
// all files in Downloads folder
let DownloadsFolderContent = fs.readdirSync(DownloadsFolderName);
let alogFile = path.join(__dirname,"log.txt");
fs.writeFileSync(alogFile,"all files in Downloads.\n");
for(var i = 0; i < DownloadsFolderContent.length; i++){
    var currentFile = DownloadsFolderContent[i];
    var itsExtName = path.extname(currentFile).toLowerCase();
    if(itsExtName == ""){
        fs.appendFileSync(alogFile,"\n"+currentFile + " --> a Directory");
        continue;
    }
    let flag = 0;
    for (key in fileTypes){
        let crospondingExt = fileTypes[key];
        
        if(crospondingExt.indexOf(itsExtName) != -1){
            // console.log(currentFile + " --> a "+ key +" file.");
            fs.appendFileSync(alogFile,"\n"+currentFile + " --> a "+ key +" file.")
            flag = 1;
            break;
        }
    }
    if(flag == 0){
        fs.appendFileSync(alogFile,"\n"+currentFile + " --> a other file type.");
    }
    
}