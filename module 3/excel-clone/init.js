let cellContent = document.querySelector(".cells-content");
const sizeOfSheet = 100;

function createCells(noOfRows){
    let cells = "";
    // neutralCell
    cells+= '<div class="neutral-cell"></div>';
    // top row head
    cells+="<div class='top-row-head'>";
    for(let i = 0; i < 26;i++){
        cells+= `<div class="top-row-head-cell">${String.fromCharCode(65+i)}</div>`
    }
    cells+="</div>";
    // first-col-cells
    cells+="<div class='left-col-head'>";
    for(let i = 0; i < noOfRows;i++){
        cells+= `<div class="left-col-cell">${i+1}</div>`
    }
    cells+="</div>";
    // main editable cells
    cells+="<div class='main-editable-cell'>";
    for(let i = 0 ; i < noOfRows; i++){
        cells+= "<div class='row'>";
        for(let j = 0; j < 26; j++){
            cells+= `<div class='cell' rowid=${i} colid=${j} contentEditable></div>`;
        }
        cells+= "</div>";
    }
    cells+="</div>";
    cellContent.innerHTML = cells;
}
createCells(sizeOfSheet);

// database 

let db = [];

function inintDB(){
    db = [];
    for(let i = 0; i < sizeOfSheet; i++){
        let colData = [];
        for (let j = 0; j < 26; j++) {
            let name = `${String.fromCharCode(65+j)}${i+1}`;
            let cellObj = {
                name,
                value: "",
                formula : "",
                children : [],
                parent : [],
            }
            colData.push(cellObj);
        }
        db.push(colData);
    }
}

inintDB();

// console.log(db);
