const puppeteer = require("puppeteer");
const answersCode = require("./code");
userEmail = "toyon96814@hhmel.com";
password = "ssdSamsungKa";

let page;
let browserPromise = puppeteer.launch({headless: false, defaultViewport: null,args: ['--start-fullscreen']});
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
    return waitAndClick("ul.menu a");
})
.then(function(){
    console.log("clicked on loginbutton");
    return waitAndClick(".fl-node-5bd106f71cd43  .fl-button-left a");

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
    let clickPromse = page.click('button[data-analytics="LoginPassword"]');
    return clickPromse;
}).then(function(){
    return waitAndClick('[data-automation="algorithms"]');
}).then(function(){
    // wait promise
    return waitAndClick('input[value="warmup"]');
}).then(function(){
    //return wait promise
    return page.waitForSelector('.challenges-list a.js-track-click');

}).then(function(){
    
    let domClickPromse = page.evaluate(function(){
        allQuestion = [];
        let array = document.querySelectorAll('.challenges-list a.js-track-click');
        for (let i = 0; i < array.length; i++) {
            allQuestion.push(array[i].href);
        }
        return allQuestion;
    })
    return domClickPromse;
}).then(function(question){
    console.log("at last stop");
    // for(let i = 0; i < question.length; i++){
        
        
    // }
    let questionPromise = quesTionSolver(question[0], answersCode.answers[0]);
})
function quesTionSolver(linkOfQuestion, answer){
    return new Promise(function(resolve, reject){
        console.log(linkOfQuestion);
        let questionPromise = page.goto(linkOfQuestion);
        questionPromise.then(function(){
            return waitAndClick(".checkbox-input");
        }).then(function(){
            console.log("at chebox");
            return waitAndClick(".ui-tooltip-wrapper .input")
        }).then(function(){
            console.log("at input area");
            let codeTypePromise = page.type(".ui-tooltip-wrapper .input", answersCode.answers[0]);
            return codeTypePromise;
        }).then(function(){
            let pressControl =  page.keyboard.down('Control');
            return pressControl;
        }).then(function(){
            let pressA = page.keyboard.press('A');
            return pressA;
        }).then(function(){
            let pressX = page.keyboard.press('X');
            return pressX;
        }).then(function(){
            let downControl = page.keyboard.down('Control');
            return downControl;
        }).then(function(){
            console.log("this woo");
            return waitAndClick('.monaco-scrollable-element.editor-scrollable.vs');
        }).then(function(){
            console.log("this woo2")
            let pressControl =  page.keyboard.down('Control');
            return pressControl;
        }).then(function(){
            let pressA = page.keyboard.press('A');
            return pressA;
        }).then(function(){
            let pressV = page.keyboard.press('V');
            return pressV;
        }).then(function(){
            console.log("at paste");
            return waitAndClick(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled")
        }).then(function(){
            console.log("submitted");
            resolve(1);
        })
    })
}


function waitAndClick(selector){
    return new Promise(function(resolve, reject){
        let waitPromise = page.waitForSelector(selector);
        waitPromise.then(function(){
            let clickPromise = page.click(selector);
            return clickPromise;
            
        }).then(function(){
            resolve();
        })
    })
}
