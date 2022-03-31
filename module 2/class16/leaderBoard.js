const request = require("request");
const jsdom = require("jsdom");
const {JSDOM} = jsdom;

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
        let allMatchFullLink = [];
        for(let i = 0; i < 3 ; i++){
            let fullLink = websiteLink+allMatchLink[i].href;
            request(fullLink, cb2);
        }
        

    }
}

// let obj = {
//     Name : Name,
//     run : run,
//     ball : ball,
//     four : four,
//     six : six,
//     sr : sr,
//     innings : innings
// }
const scoreBoard = [];
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
                let innings = 1;
                console.log("name : ", name, "run : ",run, "ball : ", ball);
                
            }
            
        }
        console.log(scoreBoard);
    }
}

function processPlayer(name,run, ball, four, six, innings){
    
}