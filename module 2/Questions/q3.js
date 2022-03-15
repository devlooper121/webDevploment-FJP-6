//copy index.html file from module1 to a new folder inside module2 having name html.
const path = require("path");
const fs = require("fs");

let sourcePath = path.join(__dirname,"..","..","module 1","index.html");
// make a folde name html in module 2
var folderPath = path.join(__dirname,"..","html");
fs.mkdirSync(folderPath);
let destPath = path.join(folderPath,"index.html");

fs.copyFileSync(sourcePath,destPath);