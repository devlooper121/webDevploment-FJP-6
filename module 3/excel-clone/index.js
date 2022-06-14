// cellContent init.js me selected hai to yha bhi chalega agar wo script uper hai toh

let neutralCell = document.querySelector(".neutral-cell")
let topRowHead = document.querySelector(".top-row-head");
let leftColHead = document.querySelector(".left-col-head");

let cellNameInput = document.querySelector("#address");
let allCells = document.getElementsByClassName("cell");
let formulaInput = document.getElementById("function");
// last selected cell

let lastSelectedCell;

cellContent.addEventListener("scroll", (e)=>{
    // console.log(e);
    let scrollFromTop = e.target.scrollTop;
    let scrollFromLeft = e.target.scrollLeft;
    // console.log(topRowHead);
    topRowHead.style.top = scrollFromTop+"px";
    leftColHead.style.left = scrollFromLeft+"px";
    neutralCell.style.top = scrollFromTop+"px";
    neutralCell.style.left = scrollFromLeft+"px";
});

let colid;
let rowid;      

for (let i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener("click", e=>{
        // selected remove from last
        if(lastSelectedCell){
            document.querySelector(`div[rid='${rowid}']`).classList.remove("active-row-col");
            document.querySelector(`div[cid='${colid}']`).classList.remove("active-row-col");
            lastSelectedCell.classList.remove("active-cell");
        }
        colid = Number(e.target.getAttribute("colid"));
        rowid = Number(e.target.getAttribute("rowid"));
        // add to clicked cell
        document.querySelector(`div[rid='${rowid}']`).classList.add("active-row-col");
        document.querySelector(`div[cid='${colid}']`).classList.add("active-row-col");
        e.target.classList.add("active-cell");
        let addressOfCell = `${String.fromCharCode(colid+65)}${rowid+1}`;
        // console.log(addressOfCell);
        cellNameInput.value = addressOfCell;
        // show formulae associated with cell;
        let cellObj = db[rowid][colid];
        formulaInput.value = cellObj.formula;
        
    });

    // blur event after moving to another cell
    allCells[i].addEventListener("blur", (e)=>{
        let newDataOfCell = e.target.innerHTML;
        lastSelectedCell = e.target;
        e.target.innerHTML = newDataOfCell;
        let{rowid,colid} = getRowCol(e.target);
        // console.log(db);
        // console.log(rowid, colid);
        let cellObj = db[rowid][colid];
        if(cellObj.value==newDataOfCell){
            return;
        }
        cellObj.value = newDataOfCell;

        // console.log("after update", cellObj);
        // Add a function that update the value of its children > grandChildren ....
        updateChildren(cellObj);
    });

    // in excel backspace can delete everything
    // 1 val 
    // 2 formula
    // 3 everent parent's child (remove itself)
    // 4 parent = []
    allCells[i].addEventListener("keydown",e => {
        if(e.key==="Backspace"){
            let cell = e.target;
            let {rowid, colid} = getRowCol(cell);
            let cellObj = db[rowid][colid];

            cellObj.value = "";
            cell.innerHTML = "";

            if(cellObj.formula){
                // console.log("yes");
                cellObj.formula = "";
                formulaInput.value = "";
                console.log("self : ",cellObj);
                removeRelation(cellObj);
                console.log("self : ",cellObj);
            }
        }
    })
}
// make value calculated if some one change the function and move awat

formulaInput.addEventListener("blur", (e)=>{
    let formula = e.target.value;
    if(formula){
        
        // update db
        let{rowid,colid} = getRowCol(lastSelectedCell);
        let cellObj = db[rowid][colid];
        if(cellObj.formula){
            console.log("self : ",cellObj);
            removeRelation(cellObj);
        }

        let calculatedVal = solveFormula(formula, cellObj);

        cellObj.value = calculatedVal;
        
        cellObj.formula = formula;
        // update vaue/ui
        lastSelectedCell.innerText = calculatedVal;
        // Add a function that update the value of its children > grandChildren ....
        updateChildren(cellObj);
    }
});
