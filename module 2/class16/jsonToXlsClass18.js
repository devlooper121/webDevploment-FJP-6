// var json2xls = require('json2xls');
// const path = require("path");

const fs = require("fs");
// fs.mkdirSync("ABC");
// let filePath = path.join(__dirname,"ABC","abc.xlsx");

// let file = require(".\\PlayerData.json")
// toExcel(file, filePath);
// // let data = [
// //     {
// //       sheet: "IPL 2021 Batsman Details",
// //       columns: [
// //         { label: "NAME", value: "Name" },
// //         { label: "RUN", value: "Run" },
// //         { label: "BALLS", value:"Balls"},
// //         { label: "4S", value: "4s" },
// //         { label: "6S", value: "6s" },
// //         { label: "INNINGS", value: "Innings"},
// //       ],
// //       content: file
// //     }
// //   ]
// // let setting = {
// //     fileName: "PlayerData",
// //     extraLength: 3,
// //     writeOptions: {},
// // }
// // json2excel(data,setting);

// function toExcel(json, filePath){
//   var xls = json2xls(json);

//   fs.writeFileSync(filePath, xls, 'binary');

// }

var json2xls = require('json2xls');
var json = {
    foo: 'bar',
    qux: 'moo',
    poo: 123,
    stux: new Date()
}

var xls = json2xls(json);

fs.writeFileSync('data.xlsx', xls, 'binary');