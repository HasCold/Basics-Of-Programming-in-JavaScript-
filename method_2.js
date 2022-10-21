// Method;
// Function inside objects

function personInfo(){
    console.log(`Person name is ${this.firstName} and age is ${this.age}`)
}

const person = {
    firstName : "Hasan",
    age : 21,
    about :personInfo
}

const person2 = {
    firstName : "Talha",
    age : 19,
    about :personInfo
}

const person3 = {
    firstName : "Umer",
    age : 20,
    about :personInfo
}

person.about();
person2.about();
person3.about();

console.log(this); // -->> Javascript ka global object hota ha window object

function myFunc() {
    // "use strict"
    console.log(this);
}
myFunc();

