let addBtn = document.getElementById("add-new");

let inputArea = document.querySelector(".input-area-new");

let textArea = document.getElementById("task-area");

let main = document.getElementById("main");

let allColorPallet = document.getElementsByClassName("priority-set");

let removeBtn = document.querySelector(".remove-selected-task");

let colorMenu = document.querySelectorAll(".priority");


let removeFlag = false;
let colorList = ["red","yellow", "green","gray"];
let colorIdxObj = {"red":0,"yellow":1, "green":2,"gray":3}
let selectedColor = colorList[3];
let uid = new ShortUniqueId();
const idSet = new Set(); 

let allTaskArr = [];
// when load page the get ticketsDB and populate main by createTicket
let ticketsDBJSON = localStorage.getItem("ticketsDB")


// color menu handler
for(let i = 0; i < colorMenu.length; i++){
    colorMenu[i].addEventListener("click", function(){
        // show its selected
        for(let j = 0; j < colorMenu.length; j++){
            colorMenu[j].classList.remove("selected");
        }
        colorMenu[i].classList.add("selected");
        // filter by color
        let filterArr = [];
        let colorOfFilter = colorMenu[i].classList[1];
        // console.log(colorOfFilter)
        for(let j = 0 ; j< allTaskArr.length; j++){
            if(allTaskArr[j].color === colorOfFilter){
                filterArr.push(allTaskArr[j]);
            }
        }
        console.log(filterArr);
        // select and remove all present
        let allDivPresent = document.querySelectorAll(".ticket-cont");
        for(let j = 0 ; j < allDivPresent.length; j++){
            allDivPresent[j].remove();
        }
        // display all filter obj
        for(let j = 0; j < filterArr.length; j++){
            let ticket = filterArr[j];
            createTicket(ticket.color, ticket.task, ticket.id);
        }
        
    });
    colorMenu[i].addEventListener("dblclick", function(){
        // remove all selection
        for(let j = 0; j < colorMenu.length; j++){
            colorMenu[j].classList.remove("selected");
        }
        console.log("dbl");
        // select and remove all present
        let allDivPresent = document.querySelectorAll(".ticket-cont");
        for(let j = 0 ; j < allDivPresent.length; j++){
            allDivPresent[j].remove();
        }
        // display all filter obj
        for(let j = 0; j < allTaskArr.length; j++){
            let ticket = allTaskArr[j];
            createTicket(ticket.color, ticket.task, ticket.id);
        }
        
    });
}

addBtn.addEventListener("click", ()=>{
    inputArea.classList.toggle("visible");
});
for(let i = 0 ; i < 4; i++){
    let selected = allColorPallet[i];
    selected.addEventListener("click", (e)=>{
        for(let j = 0; j < 4; j++){
            // console.log("y")
            allColorPallet[j].classList.remove("active");
        }
        selected.classList.add("active");
        selectedColor = selected.classList[0];
    })
}

textArea.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        const task = textArea.value.trim();
        let ticketId;
        createTicket(selectedColor,task, ticketId);
        textArea.value = ``;
        textArea.setAttribute("placeholder", "Type your notes")
        inputArea.classList.toggle("visible");
    }
})
removeBtn.addEventListener("click",()=>{
    if(!removeFlag){
        removeBtn.style.color = "red";
    }else{
        removeBtn.style.color = "black";
    }
    removeFlag = !removeFlag;
})
{/* <div class="ticket-cont">
    <div class="ticket-color red"></div>
    <div class="ticket-id">1234</div>
    <div class="task-area">
        <button class="lock-unlock" name="lock-unlock"><span class="material-symbols-outlined">lock</span></button>
    </div>
</div> */}
const createTicket = (priorityColor,task, ticketId)=>{
    // id
    let id;
    if(ticketId === undefined){
        id = uid();
    }else{
        id = ticketId;
    }
    
    let ticketContaner = document.createElement("div");
    ticketContaner.classList.add("ticket-cont");
    ticketContaner.innerHTML = `<div class="ticket-color ${priorityColor}"></div>
                                <div class="ticket-id">ID:${id}</div>
                                <div class="task-area" contenteditable="false">${task}</div>
                                <button class="lock-unlock" name="lock-unlock"><span class="material-icons material-icon-round">lock</span></button>`
    main.appendChild(ticketContaner);
    // delete handler
    ticketContaner.addEventListener("click", ()=>{
        if(removeFlag){
            ticketContaner.remove();
            // delete from ticket arr too
            let idx = getTicketById(id);
            allTaskArr.splice(idx,1);
            updateLocalStorage()
        }
    })
    // changing color handler
    let colorBand = ticketContaner.querySelector(".ticket-color");
    colorBand.addEventListener("click", ()=>{
        let currentColor = colorBand.classList[1];
        let currColorIdx = colorIdxObj[currentColor];
        colorBand.classList.remove(currentColor);
        let nextColor = colorList[(currColorIdx+1)%colorList.length];
        colorBand.classList.add(nextColor);

        // find and update color when changing color
        let idx = getTicketById(id);
        allTaskArr[idx].color = nextColor;
        updateLocalStorage()
    })

    // lock unlock handler
    let lockBtn = ticketContaner.querySelector(".lock-unlock");
    let divTag = ticketContaner.querySelector(".task-area");
    lockBtn.addEventListener("click",()=>{
        let status = divTag.getAttribute("contenteditable");
        if(status === "true"){
            divTag.setAttribute("contenteditable", "false");
            lockBtn.querySelector("span").innerText = "lock";
            // find and update task when locking task
            let idx = getTicketById(id);
            console.log(divTag.innerText);
            allTaskArr[idx].task = divTag.textContent;
            updateLocalStorage();
        }else{
            divTag.setAttribute("contenteditable", "true");
            lockBtn.querySelector("span").innerText = "lock_open";
        }
        
    })
    // adding ticket object in all array
    let ticketDetails = {
        color :priorityColor,
        task: task,
        id:id
    }
    if(ticketId===undefined){
        allTaskArr.push(ticketDetails);
        // push in local Storage
        updateLocalStorage();
        // console.log(allTaskArr);
    }
    
    // var active = false;
    // var currentX;
    // var currentY;
    // var initialX;
    // var initialY;

    // ticketContaner.addEventListener("touchstart", dragStart, false);
    // ticketContaner.addEventListener("touchend", dragEnd, false);
    // ticketContaner.addEventListener("touchmove", drag, false);

    // ticketContaner.addEventListener("mousedown", dragStart, false);
    // ticketContaner.addEventListener("mouseup", dragEnd, false);
    // ticketContaner.addEventListener("mousemove", drag, false);

    // function dragStart(e) {
    //   if (e.type === "touchstart") {
    //     initialX = e.touches[0].clientX ;
    //     initialY = e.touches[0].clientY ;
    //   } else {
    //     initialX = e.clientX;
    //     initialY = e.clientY;
    //   }

    //   if (e.target === divTag) {
    //     active = true;
    //   }
    // }

    // function dragEnd(e) {
    //   initialX = currentX;
    //   initialY = currentY;
    //   setTranslate(0, 0, ticketContaner);
    //   active = false;
    // }

    // function drag(e) {
    //   if (active) {
      
    //     e.preventDefault();
      
    //     if (e.type === "touchmove") {
    //       currentX = e.touches[0].clientX - initialX;
    //       currentY = e.touches[0].clientY - initialY;
    //     } else {
    //       currentX = e.clientX - initialX;
    //       currentY = e.clientY - initialY;
    //     }
    //     setTranslate(currentX, currentY, ticketContaner);
    //   }
    // }

    // function setTranslate(xPos, yPos, el) {
    //   el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    // }
}

if(ticketsDBJSON){
    let ticketsDBArr = JSON.parse(ticketsDBJSON);
    allTaskArr = ticketsDBArr;

    for(let i = 0 ; i < ticketsDBArr.length; i++){
        createTicket(ticketsDBArr[i].color, ticketsDBArr[i].task, ticketsDBArr[i].id);
    }
}

function idGen(){
    let randomNum = Math.floor(Math.random()*89999)+10000
    
    while(idSet.has(randomNum)){
        randomNum = Math.floor(Math.random()*89999)+10000
    }
    return randomNum;
}

function getTicketById(id){
    for(let i = 0; i < allTaskArr.length; i++){
        if(allTaskArr[i].id==id){
            return i;
        }
    }
}

function updateLocalStorage(){
    localStorage.setItem("ticketsDB", JSON.stringify(allTaskArr));
}