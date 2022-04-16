const request = require("request");
const fs = require("fs");
const jsdom = require("jsdom");
const {JSDOM} = jsdom;
const json2excel = require("json-as-xlsx");
let counter = 0;
const leaderBoard = [];
let link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

request(link, cb);

function cb(error, response, html){
    if(error) {
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;

        // every match link 
        let allMatchLink = document.querySelectorAll("div > div > div.ds-px-4.ds-py-3 > a");
        const websiteLink = "https://www.espncricinfo.com/";
        // let allMatchFullLink = [];
        console.log(allMatchLink.length);
        for(let i = 0; i < allMatchLink.length ; i++){
            let fullLink = websiteLink+allMatchLink[i].href;
            request(fullLink, cb2);
            counter++;
        }
    }
}


function cb2(error, response, html2){
    if(error){
        console.log(error);
    }else{
        const dom2 = new JSDOM(html2);
        const document2 = dom2.window.document;
        let allBatsMan = document2.querySelectorAll("div.ds-mb-4 > div.ReactCollapse--collapse > div > table.ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table tbody tr");
        
        for(let i = 0; i < allBatsMan.length; i++){
            let allTable = allBatsMan[i].querySelectorAll("td");
            
            if(allTable.length == 8){
                let name = allTable[0].textContent;
                let run = allTable[2].textContent;
                let ball = allTable[3].textContent;
                let four = allTable[5].textContent;
                let six = allTable[6].textContent;
                // console.log("name : ", name, "run : ",run, "ball : ", ball);
                processPlayer(name, run,ball, four, six);
            }
        }
        // console.log(counter);
        counter--;
        if(counter == 0){
            console.log(leaderBoard);
            // let data = JSON.stringify(leaderBoard);
            // fs.writeFileSync("PlayerData2.json", data);
            let data = [
                {
                  sheet: "IPL 2021 Batsman Details",
                  columns: [
                    { label: "Name", value: "Name" },
                    { label: "Run", value: "Run" },
                    { label: "Balls", value:"Balls"},
                    { label: "4s", value: "4s" },
                    { label: "6s", value: "6s" },
                    { label: "Innings", value: "Innings"},
                  ],
                  content: leaderBoard
                }
              ]
            let setting = {
                fileName: "playerData",
                extraLength: 3,
                writeOptions: {},
            }
            // json2excel(data,setting, jsonCallback);
            
        }
    }
}

function processPlayer(name,run, ball, four, six){
    for(let i = 0; i < leaderBoard.length; i++){
        let playerObj = leaderBoard[i];
        if(name == playerObj.Name){
            playerObj.Run += Number(run),
            playerObj.Balls += Number(ball),
            playerObj["4s"] += Number(four),
            playerObj["6s"] += Number(six),
            playerObj.Innings += 1
            return;
        }
    }
    let obj = {
        Name : name,
        Run : Number(run),
        Balls : Number(ball),
        "4s" : Number(four),
        "6s" : Number(six),
        Innings : 1
    }
    leaderBoard.push(obj);
    
}

let jsonCallback = function (sheet) {
    console.log("Download complete:", sheet);
}