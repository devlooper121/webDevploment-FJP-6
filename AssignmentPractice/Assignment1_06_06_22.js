// const chalk = require('cli-color');

// q 5

/** 
 * Every negative and positive and -ve number is true only
 * 0 is false
 * {}, [] is true;
 * "" is only false 
 * " " this true because this is not empty
 * Infinity is false
 * NaN, undefined is false
*/

// q6

// let a = "only"

// a[2] = 'q';

// console.log(a);
// ans  = B 
/******************************8 */
// q7

// problem decimal to binary 
let input = []
for(let i = 0; i < 100; i++){
    let randNumber = Math.floor(Math.random()*100000000+10);
    input.push(randNumber);
}

let desToBin = (num)=>{
    let ans = '';
    while(num!=0){
        ans = num%2+ans;
        num = Math.floor(num/2);
    }
    return ans;
}

let d2b = num => num.toString(2);

// test case checker
let testCase = (desToBin, d2b, inputArr)=>{
    for(let i = 0; i < inputArr.length; i++){
        let num = inputArr[i];
        let ans = d2b(num);
        let myAns = desToBin(num);
        if(ans == myAns){
            console.log(chalk.bgGreen("PASSED"));
        }else{
            console.log(chalk.bgRed("FAILED"));
        }
        console.log("Your Ans : " ,myAns);
        console.log("Accpected Ans : ", ans);
    }
}



// Q8 

let myFuncQ8 = str => {
    let strArr = str.split(" ");
    let first = strArr[0][0];
    strArr[0] = strArr[0].replace(first, strArr[1][0]);
    strArr[1] = strArr[1].replace(strArr[1][0], first);
    return strArr.join(" ");
}
// sir ka sol
function spoon(phrase) {
    phrase = phrase.split(" ");
    let word1Initial = phrase[0][0];
    let word2Initial = phrase[1][0];
  
    return (
      word2Initial + phrase[0].slice(1) + " " + word1Initial + phrase[1].slice(1)
    );
  }
input = ["not picking","horse riding","dog cat", "man women"]
// testCase(myFuncQ8, spoon, input);

// Q9

/**
 * Description:
Find output of the following:

function f() {
  console.log(arguments);
}

function f(a, b) {
  return a + b;
}

console.log(f(2, 3, 4, 5));

function f(x, y, z, t) {
    return x + y + z + t;
}

console.log(f(2, 3, 4, 5));
 */

//##### Function with same name get change with last definition before execution of code so where yo call the function it does't matter

// function f(){
//     console.log(arguments);
// }
// function f(a, b) {
//     return a + b;
// }

// console.log(f(1,2,3,4,5));
// function f(x, y, z, t) {
//     return x + y + z + t;
// }

// Q10

/**
 * Description:
Find output of the following:

console.log(a);
f(2, 3, 4, 5);

var a = 1;
var a = 2;
console.log(a);
console.log(b);
let b = 2;

function f() {
  console.log(arguments);
}
 */

// Ans = 
// Options: 
// A)
    // undefined
    // [Arguments] { '0': 2, '1': 3, '2': 4, '3': 5 }
    // 2
    // Error

// q11 
// study from resources


// let ans1 = JSON.parse('{"p": 5}', (key, value) =>
//   typeof value === 'number'
//     ? value * 2 // return value * 2 for numbers
//     : value     // return everything else unchanged
// );
// console.log(ans1)
// { p: 10 }

// let ans2 = JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
// //   console.log(key); // log the current property name, the last is "".
//     typeof value === 'number'
//         ? value * 2 // return value * 2 for numbers
//         : value     // return everything else unchanged
// });

// console.log(ans2);


/**
 * Description:
Find output of the following:

let obj = {"concept":""};


console.log(
  JSON.parse(
    JSON.stringify(obj).slice(0, 12) + "JSON" + JSON.stringify(obj).slice(12)
  ).concept
);
 */
// it become JSON.parse( {"concept":"JSON"} ).concept
// ans = JSON 

// Q12 
    // ans = B 

// Q13

let updateUsers = (users, userObject, item) => {
    // check user exist or not
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if( user.name == userObject.name){
            if(!checkOrderExist(item, user)){
                addOrder(user, item);
                return users;
            }else{
                return  {msg:"Already ordered!"}
            }
        }
    }
    // if not exist
    addOrder(userObject,item)
    users.push(userObject);
    return users;
    
}
let checkOrderExist = (item, user) => {
    for (let i = 0; i < user.orders.length; i++) {
        const order = user.orders[i];
        if(order.name == item){
            return true;
        }
    }
    return false;
}
let addOrder = (user, item) => {
    let id = 1;
    if(user.orders){
        id = user.orders.length+1 
    }
    
    let order = {
        id,
        name: item
    }
    if(user.orders){
        user.orders.push(order)
    }else{
        user.orders = new Array(order);
    }
}

// ****************************/
let users = [
    {
        name: "Rajneesh",
        age: 34,
        address: {
        local: "22 Alaknanda",
        city: "Dehradun",
        state: "UK",
        },
        orders: [{ id: 1, name: "GOT Book Series" }],
    },
    {
        name: "Bhavesh",
        age: 37,
        address: {
        local: "48 DT Row",
        city: "Hyderabad",
        state: "AP",
        },
    },
    {
        name: "Jasbir",
        age: 38,
        address: {
        local: "196 Lama Bhavan",
        city: "Gangtok",
        state: "Sikkim",
        },
        orders: [
        { id: 1, name: "Chair" },
        { id: 2, name: "PS5" },
        ],
    },
];

console.log(
    JSON.stringify(
      updateUsers(
        users,
        {
          name: "Rajneesh",
          age: 34,
          address: {
            local: "22 Alaknanda",
            city: "Dehradun",
            state: "UK",
          },
        },
        "GOT Book Series"
      )
    )
  );

  console.log(
    JSON.stringify(
      updateUsers(users, {
        name: "Ravi",
        age: 24,
        address: {
          local: "25 Iroda",
          city: "Dehradun",
          state: "UK",
        },
      })
    )
  );
  
  console.log(
    JSON.stringify(
      updateUsers(
        users,
        {
          name: "Ravi",
          age: 24,
          address: {
            local: "25 Iroda",
            city: "Dehradun",
            state: "UK",
          },
        },
        "Chair"
      )
    )
  );

  console.log(
    JSON.stringify(
      updateUsers(
        users,
        {
          name: "Rajneesh",
          age: 34,
          address: {
            local: "22 Alaknanda",
            city: "Dehradun",
            state: "UK",
          },
        },
        "Fan"
      )
    )
  );