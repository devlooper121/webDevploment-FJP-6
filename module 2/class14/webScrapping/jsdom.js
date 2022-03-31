const request = require("request");

const {JSDOM} = require("jsdom");

let link = "https://www.espncricinfo.com/series/netherlands-in-new-zealand-2021-22-1288970/new-zealand-vs-netherlands-1st-odi-1288987/full-scorecard";

request(link, cb);

function cb(error, response, html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let teamsNameList = document.querySelectorAll(".match-info-MATCH-half-width .team .name");
        console.log(teamsNameList[0].textContent);
    }
}