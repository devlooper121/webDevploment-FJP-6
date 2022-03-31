const request = require("request");

const {JSDOM} = require("jsdom");

let link = "https://www.espncricinfo.com/series/netherlands-in-new-zealand-2021-22-1288970/new-zealand-vs-netherlands-1st-odi-1288987/full-scorecard";
link = "https://www.espncricinfo.com/series/icc-women-s-world-cup-2021-22-1219028/india-women-vs-south-africa-women-28th-match-1243935/full-scorecard";
link = "https://www.espncricinfo.com/series/ranji-trophy-2021-22-1280196/jharkhand-vs-nagaland-preliminary-quarter-final-1280465/full-scorecard";
request(link, cb);

function cb(error, response, html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let bowlerName = document.querySelectorAll(".table.bowler tbody tr>td>a");
        // for(let i = 0; i < teamsNameList.length; i++){
        //     console.log(teamsNameList[i].textContent);
        // }
        let wicket = document.querySelectorAll(".table.bowler tbody tr>td:nth-child(5)");
        let maxWic = 0;
        let idx = 0;
        for(let i = 0; i < wicket.length; i++){
            let currWic = parseInt(wicket[i].textContent);
            if(currWic > maxWic){
                maxWic =  currWic;
                idx = i;
            }
        }
        console.log(bowlerName[idx].textContent," Has take max",maxWic," in this game");
    }
}