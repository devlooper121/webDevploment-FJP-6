// q1 solved, q2 solced
const chalk = require('cli-color');
// Q3

// Sample Input:
// [
//   { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] },
//   { name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] },
// ];

// Sample Output:
// [
//   { name: "Roorkee", avgRainfall: 5.714285714285714 },
//   { name: "Pauri", avgRainfall: 2.2857142857142856 },
// ];
function avgRainfall(data){
    return data.map(e=>{
        
        let avgRainfall = e.rainfall.reduce((acc, next, idx, arr)=>{
            acc += next;
            if(idx == arr.length-1){
                return acc/arr.length;
            }
            return acc;
        });
        let data = {
            name : e.name,
            avgRainfall : avgRainfall
        }
        
        return data;
    });
}

let ip = [
    { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] },
    { name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] },
    { name: "Delhi", rainfall: [2.3, 4, 3.1, 5.5, 1.1, 1.2, 7] },
    { name: "Noida", rainfall: [6.3, 0, 0.1, 3.5, 1, 2.6, 0.7] },
    { name: "Dehradun", rainfall: [12, 5.6, 3.1, 0.55, 11, 16.2, 19] },
    { name: "Nanital", rainfall: [8, 1.4, 0.61, 15.5, 6.6, 2, 9.82] },
];

let op = [ 
    { name: "Roorkee", avgRainfall: 5.714285714285714 },
    { name: "Pauri", avgRainfall: 2.2857142857142856 },  
    { name: "Delhi", avgRainfall: 3.457142857142857 },
    { name: "Noida", avgRainfall: 2.028571428571428 },
    { name: "Dehradun", avgRainfall: 9.635714285714286 },
    { name: "Nanital", avgRainfall: 6.275714285714286 }
]
function testCase(yourOp, desiredOp){
    
    for (let i = 0; i < desiredOp.length; i++) {
        if(desiredOp[i].avgRainfall == yourOp[i].avgRainfall){
            console.log(chalk.green("TEST CASE ",i," PASSED"));
        }else{
            console.log(chalk.red("TEST CASE ",i," FAILED!"));
        }
    }
}

testCase(avgRainfall(ip),op);
// ************************ ***************************
// q4 WRONG confusion in unShift shift
// ************************ ***************************



// q5 

let cc = [1,2,3]
console.log(cc['1']);