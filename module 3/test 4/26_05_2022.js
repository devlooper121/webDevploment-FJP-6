
// find output: 
// function resolveAfterNSeconds(n,x) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(x);
//       }, n);
//     });
//   }
  
  
//   (function(){
//       let a = resolveAfterNSeconds(1000,1)
//       a.then(async function(x){
//           let y = await resolveAfterNSeconds(2000,2)
//           let z = await resolveAfterNSeconds(1000,3)
//           let p = resolveAfterNSeconds(2000,4)
//           let q = resolveAfterNSeconds(1000,5);
//           console.log(x+y+z+await p +await q);
//       })
//   })();


  // infinite iterator function 

// function* generateSequence() {
//     let n = 1;
//     while(true){
//         yield n;
//         n++;
//     }
// }
  
// let generator = generateSequence();
// for(let gen of generator){
//     console.log(gen);

// }

// 4

// Create a trap for the following object so private data cannot be accessed 

// let userObj = {
//     private:{
//         dob:"12/3/4"
//     },
//     public:{
//         name:"Anas"
//     }
// }

// userObj = new Proxy(userObj, {
//     get(target, data){
//         if(data==="dob"){
//             return "no access";
//         }
//         return target.public[data];
//     }
// });

// console.log(userObj.name);

// 5th

// find output:

// let obj = {
//     a: {
//       b: { e: { string: "string" } },
//       c: { boolean: true },
//     },
//     d: {
//       f: {
//         g: {
//           h: { null: null },
//           i: { undefined: "defined" },
//         },
//       },
//     },
//   };
  
//   let {
//     a: {
//       b: {
//         e: { string },
//       },
//     },
//   } = obj;
  
//   let {
//     d: {
//       f: {
//         g: {
//           i: { undefined },
//         },
//       },
//     },
//   } = obj;
  
//   console.log(`${string}-${undefined}`);

//6th

// console.log(Symbol());
// 9

// function f(){
//     console.log();
// }
// function f(){
//     console.log("uu");
// }

// f();

// 10

function* f(...a) {
    console.log(a)
    let s = new Set();
    for (x in a) {
      s.add(a[x]);
      yield a[x];
    }
    yield s;
  }
  
  let f1 = f(3, 2, 1);
  
  while (true) {
    let yv = f1.next().value;
    if (typeof yv == "object") {
      console.log(yv);
      yv.add(3);
      console.log(yv);
      break;
    }
  }