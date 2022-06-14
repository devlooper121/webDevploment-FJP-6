class Person{
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    sayHi(){
        console.log(`hi i am ${this.name}`);
    }
}

let p1 = new Person("Adma",23);
console.log(p1);
p1.sayHi();

class Teacher extends Person{
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }
    sayHi(){
        console.log(`hi my name is ${this.name}\nI am a Teacher and my subject is ${this.subject}`);
    }
}

class Student extends Person{
    constructor(name, age, cgpa){
        super(name, age);
        this.cgpa = cgpa;
    }
    sayHi(){
        console.log(`hi my name is ${this.name}\nI am a Student and my CGPA is ${this.cgpa}`);
    }
}

let t1 = new Teacher("Aman", 23, "JavaSccript");
let s1 = new Student("Dheeraj", 22, "8.5");

console.log(t1);
console.log(s1);
t1.sayHi();
s1.sayHi();