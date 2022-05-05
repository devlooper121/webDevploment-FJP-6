const puppeteer = require("puppeteer");

(async function(){
    let browser = await puppeteer.launch({headless: false, defaultViewport: null,args: ['--start-fullscreen']});
    let page = await browser.newPage();
    page.setDefaultTimeout(100000);
    await page.goto("https://fast.com/");
    await page.waitForSelector(".speed-results-container.succeeded");
    await waitAndClick("#show-more-details-link", page);
    await page.waitForSelector(".extra-details-container.align-container.succeeded");
    await page.waitForSelector(".measurement-details-label.localized.succeeded");
    let data = await page.evaluate(function(){
        resultData = [];
        
        object = {
        downloadSpeed : document.getElementById("speed-value").innerText,
        downloadSpeedUnit : document.getElementById("speed-units").innerText,
        uploadSpeed : document.getElementById("upload-value").innerText,
        uploadSpeedUnit : document.getElementById("upload-units").innerText,
        letencyUn : document.getElementById("latency-value").innerText,
        letencyUnUnit : document.getElementById("latency-units").innerText,
        letencyLoded : document.getElementById("bufferbloat-value").innerText,
        letencyLodedUnit : document.getElementById("bufferbloat-units").innerText,
        userLocation : document.getElementById("user-location").innerText,
        userIsp : document.getElementById("user-isp").innerText,
        serverLocation : document.getElementById("server-locations").innerText
        }
        resultData.push(object);
        console.log(resultData);
        return resultData;
    })
    
    let pass = "NewTwiterBotAcc";
    let userid = "AtomatedB";
    await page.goto("https://twitter.com/");
    await waitAndClick("a.css-1dbjc4n:nth-child(2) > div:nth-child(1)", page);
    await page.waitForSelector(".r-30o5oe");
    await page.type(".r-30o5oe",userid, {delay:100});
    await page.click("div.css-18t94o4:nth-child(6) > div:nth-child(1)");
    await page.waitForSelector(".r-homxoj");
    await page.type(".r-homxoj",pass, {delay:100});
    await page.click(".r-19yznuf > div:nth-child(1)");
    let message = `LOCATION : ${data[0].userLocation}
    SERVER : ${data[0].serverLocation}
    ISP : #${data[0].userIsp}
    Download Speed = ${data[0].downloadSpeed}${data[0].downloadSpeedUnit}
    Upload Speed = ${data[0].uploadSpeed}${data[0].uploadSpeedUnit}
    Letency : unloaded ${data[0].letencyUn}${data[0].letencyUnUnit} loaded ${data[0].letencyLoded}${data[0].letencyLodedUnit}

    `
    await waitAndClick(".public-DraftStyleDefault-block", page);
    await page.type(".public-DraftStyleDefault-block", message, {delay:150});
    await page.click("div.r-l5o3uw:nth-child(4)");



})();

async function waitAndClick(selector, page){
    await page.waitForSelector(selector);
    await page.click(selector);
}