const json2excel = require("json-as-xlsx");
let file = require(".\\PlayerData.json")
let data = [
    {
      sheet: "IPL 2021 Batsman Details",
      columns: [
        { label: "NAME", value: "Name" },
        { label: "RUN", value: "Run" },
        { label: "BALLS", value:"Balls"},
        { label: "4S", value: "4s" },
        { label: "6S", value: "6s" },
        { label: "INNINGS", value: "Innings"},
      ],
      content: file
    }
  ]
let setting = {
    fileName: "PlayerData",
    extraLength: 3,
    writeOptions: {},
}
json2excel(data,setting);