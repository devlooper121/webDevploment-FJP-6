const request = require("request");
const jsdom = require("jsdom");
const {JSDOM} = jsdom;

const fs = require("fs");
const toExcel = require("json-as-xlsx");

var link = "https://github.com/topics";

request(link, cb);

function cb(error, response, html){
    if(error){
        console.log(error);
    }else{
        let dom = new JSDOM(html);
        const document = dom.window.document;
        let threeTopics = document.querySelectorAll("div.container-lg.p-responsive.mt-6  a");
        for(let i = 0; i < 3 ;i++){
            let catogaryLink = "https://github.com/"+threeTopics[i].href;
            
            request(catogaryLink, cbCat);
        }
    }
}
function cbCat(error, response, html){
    if(error){
        console.log(error);
    }else{
        let dom = new JSDOM(html);
        const document = dom.window.document;
        let allEightRepo = document.querySelectorAll("article a.text-bold.wb-break-word");
        for(var i = 0 ; i < 8; i++){
            let fullLinkOfRepo = "https://github.com/"+allEightRepo[i].href;
            console.log(fullLinkOfRepo);
        }
    }
}
