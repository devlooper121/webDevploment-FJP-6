const puppeteer = require("puppeteer");

userEmail = "toyon96814@hhmel.com";
password = "ssdSamsungKa";

let page;
let browserPromise = puppeteer.launch({headless: false});
let allQuestion = [];

browserPromise.then(function(browser){
    console.log("Browser is opened 😊.");
    let pagePromise = browser.newPage();
    return pagePromise;
}).then(function(pageInstance){
    console.log("Page is opened");
    page = pageInstance;
    let urlPromise = page.goto("https://www.hackerrank.com/");
    return urlPromise;
}).then(function(){
    console.log("Hackerrank is open");
    let loginButtonWaitPromise = page.waitForSelector("ul.menu a");
    return loginButtonWaitPromise;
}).then(function(){
    page.click("ul.menu a");
    let loginPromise = page.waitForSelector(".fl-node-5bd106f71cd43  .fl-button-left a");
    // let waitPromise = page.waitForSelector(".fl-module-content.fl-node-content .fl-button");
    return loginPromise;
}).then(function(){
    console.log("clicked on loginbutton");
    page.click(".fl-node-5bd106f71cd43  .fl-button-left a");
    // let domClickPromse = page.evaluate(function(){
    //     let btns = document.querySelectorAll(".fl-module-content.fl-node-content .fl-button");
    //     btns[1].click();
    //     return;
    // });
    // return domClickPromse;
}).then(function(){
    console.log("clicked again");
    let inputSelectorWaitPromise = page.waitForSelector("#input-1");
    return inputSelectorWaitPromise;
}).then(function(){
    console.log("typing password");
    let mailTypePromise = page.type("#input-1", userEmail, {delay:100});
    return mailTypePromise;
}).then(function(){
    console.log("typing password");
    let passTypePromise = page.type("#input-2", password, {delay:100})
    return passTypePromise;
}).then(function(){
    console.log("clicking login btn");
    let buttonClickPromise = page.click("button[data-analytics = LoginPassword]")
    return buttonClickPromise;
}).then(function(){
    console.log("login is sucessfull 😁");
    return page.waitForSelector('[data-automation="algorithms"]');
}).then(function(){
    console.log("working 1");
    let clickPromise = page.click('[data-automation="algorithms"]');
    return clickPromise;
}).then(function(){
    console.log("working 2");
    // wait promise
    return page.waitForSelector('input[value="warmup"]');
}).then(function(){
    console.log("working 3");
    // return click promise
    return page.click('input[value="warmup"]');
}).then(function(){
    console.log("working 4");
    //return wait promise
    return page.waitForSelector('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled');

}).then(function(){
    let domClickPromse = page.evaluate(function(){
        let question = document.querySelectorAll(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled");
        for(let i = 0 ; i < question.length; i++){
            allQuestion[i] = question[i];
        }
    })
    return domClickPromse;
}).then(function(){
    console.log(allQuestion);
}).then(function(){
    console.log("first q selected");
})