const puppeteer = require("puppeteer");
const code = require("./code");
userEmail = "toyon96814@hhmel.com";
password = "ssdSamsungKa";




(async function(){
    let browser = await puppeteer.launch({headless: false, defaultViewport: null,args: ['--start-fullscreen']});
    let page = await browser.newPage()
    await page.goto("https://www.hackerrank.com/");
    await waitAndClick("ul.menu a", page);
    await waitAndClick(".fl-node-5bd106f71cd43  .fl-button-left a", page);
    await page.waitForSelector("#input-1");
    await page.type("#input-1", userEmail, {delay:100});
    await page.type("#input-2", password, {delay:100});
    await page.click('button[data-analytics="LoginPassword"]');
    await waitAndClick('[data-automation="algorithms"]', page);
    await waitAndClick('input[value="warmup"]', page);
    await page.waitForSelector('.challenges-list a.js-track-click');
    let question = await page.evaluate(function(){
        allQuestion = [];
        let array = document.querySelectorAll('.challenges-list a.js-track-click');
        for (let i = 0; i < array.length; i++) {
            allQuestion.push(array[i].href);
        }
        return allQuestion;
    })
    for(let i=0;i<6;i++){
        await questionSolver(question[i], code.answers[i], page);
    }

})();

async function waitAndClick(selector, page){
    await page.waitForSelector(selector);
    await page.click(selector);
}

async function copyAllPastAll(mode, page){
    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.press(mode);
    await page.keyboard.up('Control');
}

async function questionSolver(linkOfQuestion, answer, page){
    await page.goto(linkOfQuestion);
    await waitAndClick(".checkbox-input", page);
    await waitAndClick(".ui-tooltip-wrapper .input", page);
    await page.type(".ui-tooltip-wrapper .input", answer);
    await copyAllPastAll('X',page);
    await waitAndClick('.monaco-scrollable-element.editor-scrollable.vs', page);
    await copyAllPastAll('V',page);
    await waitAndClick(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled", page);
    await page.waitForSelector(".congrats-cards-wrapper");
}