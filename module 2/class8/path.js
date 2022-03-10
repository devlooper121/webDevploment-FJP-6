//"C:\Users\dheer\OneDrive\Documents\Develoment\FJP-6\module 2\class8\path.js"

let path = require("path");
// console.log(path);
let extensionName = path.extname("C:\Users\dheer\OneDrive\Documents\Develoment\FJP-6\module 2\class7\os.js");
console.log(extensionName);

let baseName = path.basename("C:\\Users\\dheer\\OneDrive\\Documents\\Develoment\\FJP-6\\module 2\\class7\\test.js"); // in windows we have to use two \\ insted of one \

console.log(baseName);

console.log(__dirname) // current dir path
console.log(__filename) // current file path 

// join path

let dirName = __dirname;
let newFilePath = path.join(dirName, "fhjjhs.js");
console.log(newFilePath);