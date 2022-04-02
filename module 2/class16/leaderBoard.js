const request = require("request");
const jsdom = require("jsdom");
const {JSDOM} = jsdom;
let counter = 0;
let link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

request(link, cb);

function cb(error, response, html){
    if(error) {
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;

        // every match link 
        let allMatchLink = document.querySelectorAll(".match-cta-container > a:nth-child(3)");
        const websiteLink = "https://www.espncricinfo.com/";
        // let allMatchFullLink = [];
        for(let i = 0; i < allMatchLink.length ; i++){
            let fullLink = websiteLink+allMatchLink[i].href;
            request(fullLink, cb2);
            counter++;
        }
    }
}

const leaderBoard = {};
function cb2(error, response, html2){
    if(error){
        console.log(error);
    }else{
        const dom2 = new JSDOM(html2);
        const document2 = dom2.window.document;
        let allBatsMan = document2.querySelectorAll(".table.batsman>tbody>tr");
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
        counter--;
        if(counter == 0){
            console.log(leaderBoard);
            let n = 0;
            for(it in leaderBoard){
                n++;
            }
            console.log(n);
        }
    }
}

function processPlayer(name,run, ball, four, six){
    
    if(name in leaderBoard){
        let objInAns = leaderBoard[name];
        objInAns.run += Number(run);
        objInAns.balls += Number(ball);
        objInAns["4s"] += Number(four);
        objInAns["6s"] += Number(six);
        objInAns.innings += 1;
    }else{
        leaderBoard[name] = {
            run : Number(run),
            balls : Number(ball),
            "4s" : Number(four),
            "6s" : Number(six),
            innings : 1
        }
    }
}
// this is for printing all data after waiting 1min
// setTimeout(function () {
//     console.log(leaderBoard);
//     let n = 0;
//     for(key in leaderBoard){
//         n++;
//     }
//     console.log(n);
// },60000);