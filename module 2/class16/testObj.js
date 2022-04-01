let names = ["dheeraj", "kanha", "sourav","dheeraj", "kanha", "sourav"];

let ans = {};

for(let name in names){
    if(names[name] in ans){
        let objInAns = ans[names[name]];
        objInAns.freq += 1;
        objInAns.b += Number(name);
    }else{
        ans[names[name]] = {freq: 1, b: 2+Number(name)};
    }
    
    // console.log();
}

setTimeout(function () {
    console.log(ans);
},2000);