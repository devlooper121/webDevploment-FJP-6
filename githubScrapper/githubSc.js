const request = require("request");
const jsdom = require("jsdom");
const {JSDOM} = jsdom;
// const fs = require("fs");
const path = require("path");

const fs = require("fs");
var json2xls = require('json2xls');

const link = "https://github.com/topics";
const baseLink = "https://github.com";

request(link, cb);

function cb(error, response, html){
    if(error){
        console.log(error);
    }else{
        getTopicLink(html);
    }
}
function getTopicLink(html){
    let dom = new JSDOM(html);
    const document = dom.window.document;
    let threeTopics = document.querySelectorAll("div.container-lg.p-responsive.mt-6  a");
    let k = 0;
    for(let i = 0; i < 3 ;i++){
        let catLink = threeTopics[i].href;
        let catogaryLink = baseLink+catLink;
        let catName = catLink.substring(catLink.indexOf("/",1)+1);
        getRepopageHTML(catogaryLink, catName);
    }
}
function getRepopageHTML(link, catName){
    request(link, cbInCat);
    function cbInCat(error, res, html){
        if(error){
            console.log(error);
        }else{
            getCategoryName(html);
        }
    }
    function getCategoryName(html){
        let dom = new JSDOM(html);
        const document = dom.window.document;
        let allEightRepo = document.querySelectorAll("article a.text-bold.wb-break-word");
        let jj = 0;
        // console.log(catName);
        for(var i = 0 ; i < 8; i++){
            let repoLink = allEightRepo[i].href;
            let repoName = repoLink.split("/").pop();
            let fullLinkOfRepo = baseLink+allEightRepo[i].href+"/issues";
            // console.log(fullLinkOfRepo);
            getIssueNameLink(fullLinkOfRepo,catName, repoName);
            jj++;
            // console.log(repoName);
        }
        console.log("\n...................................")
    }

}
function getIssueNameLink(fullLinkOfRepo, catName, repoName){
    request(fullLinkOfRepo, cbInCat);
    function cbInCat(error, res, html){
        if(error){
            console.log(error);
        }else{
            getIssues(html);
        }
    }
    function getIssues(html){
        let dom = new JSDOM(html);
        const document = dom.window.document;
        let firstEightIssue = document.querySelectorAll(".js-issue-row .markdown-title");
        let currentIssusNameLink = [];
        for(let i = 0 ; i < firstEightIssue.length && i < 5; i++){
            let issueLink = baseLink+firstEightIssue[i].href;
            let issueName = firstEightIssue[i].textContent
            // console.log(issueLink);
            // console.log(issueLink);
            let obj = {
                name:issueName,
                link:issueLink
            }
            currentIssusNameLink.push(obj);
        }
        let folderPath = path.join(__dirname,catName);
        createDir(folderPath);
        let repoFolderPath = path.join(folderPath,repoName);
        createDir(repoFolderPath);
        let jsonFilePath = path.join(repoFolderPath,repoName+".xlsx");
        // fs.writeFileSync(jsonFilePath,JSON.stringify(currentIssusNameLink));
        toExcel(currentIssusNameLink,jsonFilePath);
        // console.log(currentIssusNameLink);
    }
}

function createDir(path){
    if(!fs.existsSync(path)){
        fs.mkdirSync(path);
    }
}

function toExcel(data, filePath){
   
    var xls = json2xls(data);
    
    fs.writeFileSync(filePath, xls, 'binary');

}
