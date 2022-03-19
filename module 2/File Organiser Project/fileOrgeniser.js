// this file organise all your files in working directory (in which directory you'll run this code)

// Todo 1 : we need to require : path and fs
// requiring path
const path = require("path");
// requiring fs
const fs = require("fs");
const { Console } = require("console");
// Todo 2 : make a object which have all file catogary as key and their crosponding extentions as value
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
// Todo 2 : set the working path for organising
let cwd = __dirname;
//Todo 3 : Read the directory and store in a variable
let allFiles = fs.readdirSync(cwd);

// todo 4: now excess every file and put files in their crosponding folder 
for(var i = 0; i < allFiles.length ;i++){
    let file = allFiles[i];
    let fileExt = path.extname(file);
    let flag = 0;
    if(fileExt == "") continue;
    for(key in possibleExtentions){
        let presentType = possibleExtentions[key];
        if(presentType.indexOf(fileExt) != -1){
            // first make folder 
            // console.log(file);
            let folderPath = path.join(cwd,key);
            if(!fs.existsSync(folderPath))
                fs.mkdirSync(folderPath);
            // testing area
            // we first make a text file and write log
            let textFilePath = path.join(folderPath,"log.txt");
            let content = "Only ["+possibleExtentions[key]+ "] \nTypes files.\n";
            // console.log();
            if(!fs.existsSync(textFilePath)){
                fs.writeFileSync(textFilePath,content);
            }
            
            // todo 5: copy and delete

            let destPath = path.join(folderPath,file);

            let sourcePath = path.join(cwd,file);
            // copy
            fs.copyFileSync(sourcePath,destPath);
            // remove
            fs.unlinkSync(sourcePath);
            // now only write files log in txt
            let logFilePath = path.join(cwd,key,"log.txt");
            fs.appendFileSync(logFilePath,"\n"+file);
            flag = 1;
            break;
        }
    }
    // todo 6: the other folder which contain all leftover files
    if( flag == 0){
        console.log(fileExt);
        let otherFolderPath = path.join(cwd,"Others")
        if(!fs.existsSync(otherFolderPath))
            fs.mkdirSync(otherFolderPath);

        // todo 5.1: copy and delete

        let destPath = path.join(otherFolderPath,file);

        let sourcePath = path.join(cwd,file);
        // copy
        fs.copyFileSync(sourcePath,destPath);
        // remove
        fs.unlinkSync(sourcePath);
        if(!fs.existsSync(path.join(otherFolderPath,"log.txt")))
            fs.writeFileSync(path.join(otherFolderPath,"log.txt"),"Others type files\n");
        fs.appendFileSync(path.join(otherFolderPath,"log.txt"),file+"\n");
    }
}