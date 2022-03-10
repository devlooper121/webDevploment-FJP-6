let fs = require("fs");

let path = require("path");

let newFilePath = path.join(__dirname,"createdFile.txt");
// fs.writeFilePath creates a file which is given and overwrite if it exists
fs.writeFileSync(newFilePath, "I am newFile.txt created by fs.writeFileSync");

let newFilePath2 = path.join(__dirname,"createdFile2.txt");

// fs.writeFileSync(newFilePath2, "I am newFile2.txt created by fs.writeFileSync");
fs.writeFileSync(newFilePath2, "changing to new content");
