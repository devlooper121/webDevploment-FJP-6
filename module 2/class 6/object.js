//  object JavaScript
// key value pair
// key must be in quotes
// if not it make them string 😁
let obj = {};
console.log(obj);

let nameAmn = {
    name: "Mohd Aman",
    "Age": 27,
    phoneNo: 9985857485,
    lastName: "Aman"
};

console.log(nameAmn);

let capAmeca = {
    name: "Steve Rogers",
    age: 93,
    friends: ["Natasha", "Thor", "Tony", "bucky", "Bruce"],
    address: {
        city: "Brooklyn",
        country: "USA"
    },
    isAvengers: false,
    sayHi: function () {
        console.log("Hi I am Captain America.");
        return 0;
    }
}

console.log(capAmeca);
// accessing by key arr method
console.log(capAmeca["name"]);
// accessing by . method
console.log(capAmeca.address.city);

console.log(capAmeca.friends);
// function call
console.log(capAmeca.sayHi());// this print a print statement so it will say undefined // but if function return something then undefined not get printed
capAmeca.sayHi() // this is good
capAmeca["sayHi"](); // this is also good

// adding value in object
console.log("Object before change", capAmeca);
capAmeca.movie = ['Captain America I', 'Avengers', "Captain America II","Avengers 2"]
capAmeca.isAvengers = true;

console.log("Object after change", capAmeca);
