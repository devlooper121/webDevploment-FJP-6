let addSheetBtn = document.querySelector(".add-sheet");
let sheetList = document.querySelector(".sheets-list")
let sheetId = 0;


addSheetBtn.addEventListener("click",function(){
    sheetId++;
    let activeSheet = document.querySelector(".active-sheet");
    activeSheet.classList.remove("active-sheet");
    let sheetDiv = document.createElement("div");
    sheetDiv.classList.add("sheet");
    sheetDiv.classList.add("active-sheet");
    sheetDiv.setAttribute("sheetId",sheetId);
    sheetDiv.innerText = `Sheet ${sheetId+1}`;
    sheetList.append(sheetDiv);
    initUi(); // update ui 
    inintDb();
    // changeDB

    db = sheetsDb[sheetId];
    console.log(sheetsDb);
    console.log(db);
});

function initUi(){
    for(let i = 0; i < noOfRows; i++){
        for(let j = 0 ; j < 26; j++){
            cell = document.querySelector(`div[rowid="${i}"][colid="${j}"]`)
            cell.innetHTML = ""; 
        }
    }
}