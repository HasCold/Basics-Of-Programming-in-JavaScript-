// Objects
//  Objects and Arrays are reference data types;
// Arrays are good but not sufficient;
// for real world data;
// objects store key value pairs;
// objects don't have index
// we use curly braces for objects
// How to create objects

// const person = {key value pairs, another key value pair}
const person = {name:"Hasan", age:22, Hobbies:["Guitar", "sleeping", "Programming"]}; // we can also say that object literal in the curly braces;
// JavaScript ma jo key hoti ha wo BY-Default string ma hoti ha;
console.log(person);
console.log(typeof person);

// How to access data/key  from objects; 
// we can also say the key properties like name , age;
console.log("Access data from objects");
console.log(person.name);
// console.log(person["name"]); Second way to access the data from object;
console.log(person.age);


// How to add key value pairs to objects;
person.gender = "Male";
console.log(person);
