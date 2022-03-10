let cp = require("child_process");

// cp.execFileSync("calc");

// cp.execSync("calc");

// cp.execSync("code");

let output = cp.execSync("python python.py");
let outputjs = cp.execSync("node test.js");
console.log("Output of python filr : " + output);
console.log(9 + outputjs);