function getRowCol(element){
    return{
        rowid:`${element.getAttribute("rowid")}`,
        colid:`${element.getAttribute("colid")}`
    }
}
// formulae sould be separeted by space

function solveFormula(exp, selfCellObj){
    exp = exp.toUpperCase();
    let allComponents = exp.toUpperCase().split(" ");
    for (let i = 0; i < allComponents.length; i++) {
        let compo = allComponents[i];
        if(compo[0] >= 'A' && compo[0] <= 'Z'){
            let {rowid, colid} = getRowColFromAdd(compo);
            let cellObj = db[rowid][colid];
            // add only when it call from function change event
            if(selfCellObj){
                cellObj.children.push(selfCellObj.name);
                selfCellObj.parent.push(cellObj.name);// or compo //
            }
            // console.log(cellObj);
            exp = exp.replace(compo,cellObj.value);
        }
    }
    // console.log(exp);
    let calculatedValue = eval(exp);
    return calculatedValue;
}

// update children recursevely all
function updateChildren(cellObj){
    
    for (let i = 0; i < cellObj.children.length; i++) {
        // console.log("wo");
        const childName = cellObj.children[i];
        
        // get child element by Address ( because children contains child name arr)
        let {rowid,colid} = getRowColFromAdd(childName);
        // console.log(rowid, colid);
        let childCellObj = db[rowid][colid];
        // revaluate value
        console.log(childCellObj.formula);
        let newVal = solveFormula(childCellObj.formula);
        // update value in DB
        childCellObj.value = newVal;
        // update in ui
        document.querySelector(`div[rowid='${rowid}'][colid='${colid}']`).textContent = newVal;
        // call for child of child
        updateChildren(childCellObj);
    }
}
// update/remove relation when deleting val or changing formula
function removeRelation(cellObj){
    // remove relation
    // 3 every parent's child (remove itself)
    // 4 parent = []
    cellObj.parent.forEach(parent =>{
        let {rowid, colid} = getRowColFromAdd(parent);
        let parentsCellObj = db[rowid][colid];
        let before = parentsCellObj.children;
        console.log("parent before", before);
        let updatedChildren = parentsCellObj.children.filter(e => e!==cellObj.name);
        parentsCellObj.children = updatedChildren;
        console.log("parent aftr", updatedChildren);
    });
    cellObj.parent=[];
    
}
function getRowColFromAdd(address){
    let rowid = Number(address.substring(1))-1;
    let colid = address.charCodeAt(0)-65;
    return {
        rowid,
        colid
    }
}
