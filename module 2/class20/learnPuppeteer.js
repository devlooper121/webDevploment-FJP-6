const puppeteer = require("puppeteer");

let browserPromise = puppeteer.launch({headless:false});

browserPromise.then(function(browserInstance){
    console.log("browser is opend");
    let pagePromise = browserInstance.newPage();
    return pagePromise;
}).then(function(page){
    console.log("Page is opened");
    let urlPromise = page.goto("https://www.google.com/");
    return urlPromise;
}).then(function(){
    console.log("google is opened")
})