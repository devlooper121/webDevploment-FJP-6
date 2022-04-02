// require path module
const path = require("path");
// require file system module
const fs = require("fs");
// take a line number
let LINE = 1;
// find out which os it is ?
let eol = "";
if(process.platform === "win32"){
    eol = "\r";
}
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
    "--a": about,
    "ls" : listItem
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
            if(isFile(firstInput)){
                console.log(fs.readFileSync(firstInput,"utf-8"));
            }else{
                console.log("Please provid file path not folder path to read.")
            }
        }else{
            console.log("Illegle command. 🥱");
            help();
        }
    }
}else{
    // we have more than one input
    allContent = []; // which will going to be read
    let lastFunction = "";
    for(let i = 2; i < inputArr.length; i++){
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
                    if(lastFunction == ""){
                        let itsContent = nRead(inputArr[i]);
                        Array.prototype.push.apply(allContent, itsContent);
                    }else{
                        let itsContent = catMethods[lastFunction](inputArr[i]);
                        Array.prototype.push.apply(allContent, itsContent);
                    }
                }
            }else{
                console.log("Argument ",inputArr[i],"is illigle.");
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
        if(content[i] != eol){
            content[i] += "\n";
        }
    }
    // console.log(content);
    return content;
}

function addNumberNonEmptyLine(givenPath) {
    let content = fs.readFileSync(givenPath,"utf-8").toString().split("\n");
    for(let i = 0; i < content.length; i++){
        if(content[i] != eol){
            content[i] = LINE++ +" "+content[i]+"\n";
        }else{
            content[i] = content[i]+"\n";
        }
    }
    // console.log(content);
    return content;
}
// addNumberNonEmptyLine(path.join(__dirname,"test.txt"));
function addNumberToLine(givenPath) {
    let content = fs.readFileSync(givenPath,"utf-8").toString().split("\n");
    for(let i = 0; i < content.length; i++){
        content[i] = LINE++ +" "+content[i]+"\n";
    }
    // console.log(content);
    return content;
}
// addNumberToLine(path.join(__dirname,"test.txt"))
//normal read
function nRead(givenPath){
    let content = fs.readFileSync(givenPath,"utf-8").toString().split("\n");
    for(let i = 0; i < content.length; i++){
        content[i] = content[i]+"\n";
    }
    return content;
}
function help() {
    console.log('\n************************ USE CAT COMMAND IN WINDOWS *****************************\n\
                \n$ <file> <file> ...                 " : "use can use as many files after any read commands -s -b -n or without it will read lines",\
                \n$ <-s> <file> or <-S> <file>        " : "use for removing big line break",\
                \n$ <-b> <file> or <-B> <file>        " : "add numbring to non-empty lines",\
                \n$ <-n> <file> or <-N> <file>        " : "add numbering to all lines",\
                \n$ <--help>  or <--h>                " : "for help",\
                \n$ <--version> or <--v>              " : "for version information",\
                \n$ <--about> or <--a>                " : "about section and developer information"\
                \n\n************************** BY DHEERAJ SHRIVASTVA *****************************');
}
function tellVersion() {
    console.log("version : 1.1.9\n");
}
function about() {
console.log('\n************************** DEVELOPER INFORMATION ******************************\n\
            \n$ NAME    : DHEERAJ KUMAR SHRIVASTVA\
            \n$ GitHub  : https://github.com/devlooper121\
            \n$ Linkdin : https://www.linkedin.com/in/devlooper121/\
            \n$ Twitter : https://twitter.com/super_121\
            \n$ LeetCode: https://leetcode.com/devlooper/\
            \n$ Email   : mailtodheeraj2@gmail.com\
            \n\n*******************************************************************************');
}
function listItem(){
    let files = fs.readdirSync(__dirname);
    console.log("******************** Wcat ls Command **********************");
    for(item in files){
        console.log("\t",files[item]);
    }
    console.log("***********************************************************");
}

// console.log(typeof(catMethods["-s"]("test.txt")))