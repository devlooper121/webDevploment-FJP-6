let x = 5;
let inter = setInterval(()=>{
    console.log("ff");
    x--;
    if(x<0) clearInterval(inter);
})