// let allLockBtn = document.getElementsByClassName("lock-unlock");
let allPriorityTag = document.getElementsByClassName("priority-color");
let colorQueue = ["red", "yellow", "green", "gray"];

// maing add task in main
// adding event listener on add-btn 
let addBtn = document.getElementById("add-new");

addBtn.addEventListener("click", ()=>{
    // select parent div whwere it is going to added
    let parent = document.getElementById("main");

    // first make div with task class
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    // make color priority div 
    let priorityDiv = document.createElement("div");
    priorityDiv.getAttribute
    priorityDiv.classList.add("priority-color");
    priorityDiv.classList.add("red");

    // make main content div
    let mainContentDiv = document.createElement("div");
    mainContentDiv.classList.add("main-content");
    

    // make button for lock unlock
    let lockBtn= document.createElement("button");
    lockBtn.classList.add("lock-unlock");
    lockBtn.innerHTML = '<span class="material-symbols-outlined">lock_open</span>';

    //make p tag for content
    let contentHolder = document.createElement("p");
    contentHolder.classList.add("note-content");
    contentHolder.setAttribute("contenteditable", "true");

    // move button and p in mainContent
    mainContentDiv.appendChild(lockBtn);
    mainContentDiv.appendChild(contentHolder);

    // move color, main content in task

    taskDiv.appendChild(priorityDiv);
    taskDiv.appendChild(mainContentDiv);

    // now appen in parent
    parent.appendChild(taskDiv);
    
    lockUnlock();
    allPriorityTag = document.getElementsByClassName("priority-color");
    changePriority()
})


// make content lock unlock


function lockUnlock(){
    let allLockBtn = document.getElementsByClassName("lock-unlock");
    console.log(allLockBtn);
    for(let i = 0 ; i < allLockBtn.length; i++){
        allLockBtn[i].addEventListener("click", function(e){
            let parent = e.target.parentElement;
            let textContent = parent.lastElementChild;
            // let child = e.target.innerHTML;
            // if(child === '<span class="material-symbols-outlined">lock</span>'){
            //     e.target.innerHTML = '<span class="material-symbols-outlined">lock_open</span>';
            // }else{
            //     e.target.innerHTML = '<span class="material-symbols-outlined">lock</span>';
            // }
            // console.log(child);
            let editable = textContent.getAttribute("contenteditable");
            if(editable === "true"){
                textContent.setAttribute("contenteditable","false");
            }else{
                textContent.setAttribute("contenteditable","true");
            }
        })
    }
}


function changePriority(){
    for(let i = 0 ; i < allPriorityTag.length; i++){
        allPriorityTag[i].addEventListener("click", (e)=>{
            let prevTag = e.target.classList[1];
            e.target.classList.remove(prevTag);
            let oldIdx = colorQueue.indexOf(prevTag);
            let newIdx = oldIdx;
            if(oldIdx+1==4){
                newIdx = 0;
            }else{
                newIdx+=1;
            }
            e.target.classList.add(colorQueue[newIdx]);
            
        })
    }
}
