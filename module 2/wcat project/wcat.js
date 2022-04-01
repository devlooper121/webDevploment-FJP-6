// require path module
const path = require("path");
// require file system module
const fs = require("fs");
// require file system extra for moving file
const fse = require("fs-extra");


// making all command and its function object
const catMethods = {
    "-s": removeBigLineBreak,
    "-b": addNumberNonEmptyLine,
    "-n": addNumberToLine,
    "-S": removeBigLineBreak,
    "-B": addNumberNonEmptyLine,
    "-N": addNumberToLine
}
const helpMethod = {
    "--help": help,
    "--h": help,
    "--version": tellVersion,
    "--v": tellVersion,
    "--about": about,
    "--a": about
}
// main function
// take input from user
let inputArr = process.argv;
if(inputArr.length == 2){ // means no input has been provided so help him/her 😂
    help();
}else if(inputArr.length == 3){ // means only one input has been provided 😊
    let firstInput = inputArr[2];
    if(firstInput in helpMethod){
        helpMethod[firstInput]();
    }else if(firstInput in catMethods){
        console.log("Also provide file path (relative or absolute) after ", firstInput);
    }else{
        if(isExists(firstInput)){
            // console.log("working");
            if(isFile(firstInput)){
                // console.log("working 2");
                console.log(fs.readFileSync(firstInput,"utf-8"));
            }else{
                console.log("Please provid file path not folder path.")
            }
        }else{
            console.log("File Does Not Exists. 🥱");
        }
        // console.log(isExists(firstInput));
    }
}else{
    // we have more than one input
    console.log("wok");
    allContent = []; // which will going to be read
    let lastFunction = "";
    for(let i = 2; i < inputArr.length; i++){
        console.log("wok 2");
        if(inputArr[i] in helpMethod){
            console.log("Illigle input.");
            help();
            break;
        }
        if(inputArr[i] in catMethods){
            lastFunction = inputArr[i];
        }else{
            if(isExists(inputArr[i])){
                if(isFile(inputArr[i])){
                    if(lastFunction = ""){
                        let itsContent = nRead(inputArr[i]);
                        Array.prototype.push.apply(allContent, itsContent);
                    }else{
                        let itsContent = catMethods[lastFunction](inputArr[i]);
                        Array.prototype.push.apply(allContent, itsContent);
                    }
                }
            }else{
                console.log("Argument ",i,"is illigle.");
                break;
            }
        }
    }
    let printContent = "";
    for(let i = 0; i < allContent.length; i++){
        printContent+=allContent[i];
    }
    console.log(printContent);
}
// make a function that check if file exists or not
function isExists(givenPath){
    if(fs.existsSync(givenPath)){
        return true;
    }else{
        return false;
    }
} 
// checks if it is a file name or folder name
function isFile(givenPath){
    if(path.extname(givenPath) != ""){
        return true;
    }
    return false;
}
// define all function 

function removeBigLineBreak(givenPath) {
    let content = fs.readFileSync(givenPath,"utf-8").toString().split("\n");
    for(let i = 0; i < content.length; i++){
        if(content[i] == "\r"){
            content[i] = "";
        }
    }
    // console.log(content);
    return content;
}
// take a line number
let LINE = 1;
function addNumberNonEmptyLine(givenPath) {
    let content = fs.readFileSync(givenPath,"utf-8").toString().split("\n");
    for(let i = 0; i < content.length; i++){
        if(content[i] != "\r"){
            content[i] = LINE++ +" "+content[i];
        }
    }
    // console.log(content);
    return content;
}
// addNumberNonEmptyLine(path.join(__dirname,"test.txt"));
function addNumberToLine(givenPath) {
    let content = fs.readFileSync(givenPath,"utf-8").toString().split("\n");
    for(let i = 0; i < content.length; i++){
        content[i] = LINE++ +" "+content[i];
    }
    // console.log(content);
    return content;
}
addNumberToLine(path.join(__dirname,"test.txt"))
//normal read
function nRead(givenPath){
    let content = fs.readFileSync(givenPath,"utf-8").toString().split("\n");
    return content;
}
function help() {
    console.log('Use cat commands in Windows\
                \n"-s or -S        " : "use for removing big line break",\
                \n"-b or -B        " : "add numbring to non-empty lines",\
                \n"-n or -N        " : "add numbering to all lines",\
                \n"--help or --h   " : "for help",\
                \n"--version or --v" : "for version information",\
                \n"--about or --a  " : "about section and developer information"');
}
function tellVersion() {
    console.log("version : 1.0.0\n");
}
function about() {
    console.log("made by Dheeraj\n");
}