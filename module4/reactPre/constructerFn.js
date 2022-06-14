// constructor function

function car (name, model,color){
    this.name = name,
    this.model = model,
    this.color = color,
    this.test = function(){
        console.log(`I am driving ${this.model}`);
    }
}

let car1 = new car("MBW", "X6", "white"); // new key provide a empty object "THIS"; so no confusion
console.log(car1);
car1.test();
let t = car1.test;
t(); //

let bike = (name, model, col)=>{
    this.name= name;
    this.model = model;
    this.col = col;
}

let bike1 = new bike("h","j", "k");
console.log(bike1);