// let a =0;{
//     let a = 8;{
//         let a = 111;
//         console.log(a);
//     }
//     console.log(a);
// }
// console.log(a);

// function rainDance(rainfallData){

//     for(let i = 0; i < rainfallData.length; i++){
//         let rainData = rainfallData[i].rainfall; // each city rainfall data
//         let avgRainfall = 0; // var to zero for avrage calculation
//         for(let j = 0; j< rainData.length; j++){
//             avgRainfall+= rainData[j];
//         }
//         avgRainfall = avgRainfall/rainData.length; // avrage calculation
//         delete rainfallData[i].rainfall; // deleting rainfall key from each city rainfallData[i] 
//         rainfallData[i]["avgRainfall"] = avgRainfall; // adding avrage key
//     }
//     return rainfallData;//  returning list
// }
// let t1 =  [ { name: "Delhi", rainfall: [2.3, 4, 3.1, 5.5, 1.1, 1.2, 7] }, { name: "Noida", rainfall: [6.3, 0, 0.1, 3.5, 1, 2.6, 0.7] }, { name: "Dehradun", rainfall: [12, 5.6, 3.1, 0.55, 11, 16.2, 19] }, { name: "Nanital", rainfall: [8, 1.4, 0.61, 15.5, 6.6, 2, 9.82] }, ];
// console.log(rainDance(t1))

// let arr = [1, 2, 3]; (function () { for (x in arr) arr.unshift(arr.pop()); console.log(arr); })();

// let randomAdder = function (arr = ["a", "b"]) { arr[arr.length * arr.length] = arr.length * arr.length; };

// randomAdder(arr); randomAdder();

// console.log(arr[9]); console.log(arr[8]);

// let a = "This only works if and only if";

// let b = a.slice(a.indexOf("only"));

// let c = b.lastIndexOf("only");
// console.log(c)
// console.log(b[c])
// b[c] = "i";

// console.log(a); console.log(b);

// function decToBin(n){
//     output = "";
//     while(n > 0){
//         let rem = n%2;
//         output = rem + output;
//         n = Math.floor(n /2);
//     }
//     return output;
// }

// console.log(decToBin(45));

// function spoon(text){
//     let words = text.split(" ");
//     let w1 = words[0];
//     let w2 = words[1];

//     let newW1 = w2[0]+w1.slice(1);
//     let newW2 = w1[0]+w2.slice(1);

//     return newW1 + " " +newW2;
// }

// console.log(spoon("horse riding"));

// function a(){
//     console.log(arguments);
// }
// function a(a,b){
//     return a+b;
// }
// console.log(a(1,2,3,4));
// function a(a,b,c, d){
//     return a+b+c+d;
// }
// console.log(a(1,2,3,4));

// console.log(a); f(2, 3, 4, 5);

// var a = 1; var a = 2; console.log(a); console.log(b); let b = 2;

// function f() { console.log(arguments); }

// let a;

// console.log(a);

// function A() {
//     let a = 2; console.log(a);

//     function C() {
//         console.log(a);

//         function D() {
//             console.log(a);

//             a = 2;
//         }
//         D();
//         a = 3;
//     } C();
// }

// function B() {
//     let a; console.log(a);

//     function E() {
//         a = 6; console.log(a);

//     }

//     a = 2; E(); console.log(a);
// }

// function F() { console.log(a); a = 2; }

// a = 3;

// F(); B(); A();
// let obj = {"concept":""};

// console.log( JSON.parse( JSON.stringify(obj).slice(0, 12) + "JSON" + JSON.stringify(obj).slice(12) ).concept );
let users = [{ name: "Rajneesh", age: 34, address: { local: "22 Alaknanda", city: "Dehradun", state: "UK", }, orders: [{ id: 1, name: "GOT Book Series" }], }, { name: "Bhavesh", age: 37, address: { local: "48 DT Row", city: "Hyderabad", state: "AP", }, }, { name: "Jasbir", age: 38, address: { local: "196 Lama Bhavan", city: "Gangtok", state: "Sikkim", }, orders: [{ id: 1, name: "Chair" }, { id: 2, name: "PS5" },], },];
function updateUsers(users, userObject, item) {
    let flag = 1;
    let user ;
    for (let i = 0; i < users.length; i++) {
        user = users[i];
        if(user.name == userObject.name){
            flag = 0;
            break;
        }

    }
    if(flag == 1){
        if (item) {
            let orderObj = {
                id: 1,
                name: item
            }
            userObject.order = orderObj;
        }
        user = userObject;
        users.push(userObject);
    }       
    else {
        
        let orderList = user.orders;
        let lastOrder = orderList[orderList.length - 1];
        if(lastOrder.name == item) return "Already Ordered";
        let orderId = lastOrder.id + 1;
        let newOrder = {
            id: orderId,
            name: item
        }
        orderList.push(newOrder);
    }
        

    
    return users;
}

console.log(
    JSON.stringify( updateUsers( users, { name: "Rajneesh", age: 34, address: { local: "22 Alaknanda", city: "Dehradun", state: "UK", }, }, "GOT Book Series" ) ) );
    
    console.log( JSON.stringify( updateUsers(users, { name: "Ravi", age: 24, address: { local: "25 Iroda", city: "Dehradun", state: "UK", }, }) ) );
    
    // console.log( JSON.stringify( updateUsers( users, { name: "Ravi", age: 24, address: { local: "25 Iroda", city: "Dehradun", state: "UK", }, }, "Chair" ) ) );
    
    // console.log( JSON.stringify( updateUsers( users, { name: "Rajneesh", age: 34, address: { local: "22 Alaknanda", city: "Dehradun", state: "UK", }, }, "Fan" ) ) );