const request = require("request");
const {JSDOM} = require("jsdom");

let link = "https://www.espncricinfo.com/series/ranji-trophy-2021-22-1280196/jharkhand-vs-nagaland-preliminary-quarter-final-1280465/full-scorecard";
// link = "https://www.espncricinfo.com/series/netherlands-in-new-zealand-2021-22-1288970/new-zealand-vs-netherlands-1st-odi-1288987/full-scorecard";
request(link, cb);

function cb(error, response, html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsMan = document.querySelectorAll(".table.batsman tbody tr>td>a");
        let siteLink = "https://www.espncricinfo.com";
        for(let i = 0; i < batsMan.length; i++){
            let playerLink = siteLink+ batsMan[i].href;
            request(playerLink, cb2);
            function cb2(error, response, html){
                if(error){
                    // console.log(error);
                    console.log(batsMan[i].textContent, " NOT Connect");
                }
                else{
                    const dom2 = new JSDOM(html);
                    const document2 = dom2.window.document;
                    let batsManDetails = document2.querySelectorAll(".playerpage-content .player_overview-grid div>h5");
                    console.log("player : ",i);
                    console.log("\n****************************************\n");
                    console.log(batsManDetails[0].textContent);
                    console.log(batsManDetails[1].textContent);
                    console.log("\n****************************************\n");
                }
            }
        }
    }
}