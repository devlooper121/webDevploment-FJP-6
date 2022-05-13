let addBtn = document.getElementById("add-new");
let inputArea = document.querySelector(".input-area-new");
let textArea = document.getElementById("task-area");
let main = document.getElementById("main");
let allColorPallet = document.getElementsByClassName("priority-set");

let removeFlag = false;
let removeBtn = document.querySelector(".remove-selected-task");
let colorList = ["red","yellow", "green","gray"];
let colorIdxObj = {"red":0,"yellow":1, "green":2,"gray":3}
let selectedColor = colorList[3];
const idSet = new Set(); 

addBtn.addEventListener("click", ()=>{
    inputArea.classList.toggle("visible");
});
for(let i = 0 ; i < 4; i++){
    let selected = allColorPallet[i];
    selected.addEventListener("click", (e)=>{
        for(let j = 0; j < 4; j++){
            console.log("y")
            allColorPallet[j].classList.remove("active");
        }
        selected.classList.add("active");
        selectedColor = selected.classList[0];
    })
}

textArea.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        const task = textArea.value;
        let id = idGen();
        createTicket(selectedColor,task, id);
        textArea.value = ``;
        textArea.setAttribute("placeholder", "Type your notes")
        inputArea.classList.toggle("visible");
    }
})
{/* <div class="ticket-cont">
    <div class="ticket-color red"></div>
    <div class="ticket-id">1234</div>
    <div class="task-area">
        <button class="lock-unlock" name="lock-unlock"><span class="material-symbols-outlined">lock</span></button>
    </div>
</div> */}
const createTicket = (priorityColor,task, id)=>{
    let ticketContaner = document.createElement("div");
    ticketContaner.classList.add("ticket-cont");
    ticketContaner.innerHTML = `<div class="ticket-color ${priorityColor}"></div>
                                <div class="ticket-id">ID:${id}</div>
                                <div class="task-area" contenteditable="false">${task}
                                    <button class="lock-unlock" name="lock-unlock"><span class="material-icons material-icon-round">lock</span></button>
                                </div>`
    main.appendChild(ticketContaner);
    ticketContaner.addEventListener("click", ()=>{
        if(removeFlag){
            ticketContaner.remove();
        }
    })
    let colorBand = ticketContaner.querySelector(".ticket-color");
    colorBand.addEventListener("click", ()=>{
        let currentColor = colorBand.classList[1];
        let currColorIdx = colorIdxObj[currentColor];
        colorBand.classList.remove(currentColor);
        colorBand.classList.add(colorList[(currColorIdx+1)%colorList.length]);
    })
    let lockBtn = ticketContaner.querySelector(".lock-unlock");
    let divTag = ticketContaner.querySelector(".task-area");
    lockBtn.addEventListener("click",()=>{
        let status = divTag.getAttribute("contenteditable");
        if(status === "true"){
            divTag.setAttribute("contenteditable", "false");
            lockBtn.querySelector("span").innerText = "lock";
        }else{
            divTag.setAttribute("contenteditable", "true");
            lockBtn.querySelector("span").innerText = "lock_open";
        }
    })
    

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

removeBtn.addEventListener("click",()=>{
    if(!removeFlag){
        removeBtn.style.color = "red";
    }else{
        removeBtn.style.color = "black"
    }
    removeFlag = !removeFlag;
})

function idGen(){
    let randomNum = Math.floor(Math.random()*89999)+10000
    
    while(idSet.has(randomNum)){
        randomNum = Math.floor(Math.random()*89999)+10000
    }
    return randomNum;
}

