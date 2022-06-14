// arrofn

function fx (){
    console.log(this);
}

let fx2 = ()=>{
    console.log(this);
}

fx(); // global 
fx2(); // empty

let fx3 = ()=>{
    let fx4 = ()=>{
        console.log(this);
    }
    fx4();
}
fx3();

let obj = {
    name: "name",
    age : 11,
    show : fun
}