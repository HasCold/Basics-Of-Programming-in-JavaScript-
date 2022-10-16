// intro to arrays
// Array is a reference type
// All the reference type are called the "OBJECT"; so Array is a object; 


// How to create arrays

// Ordered Collection of items
let fruits = ["apple", "mango", "grapes"];
let obj = {}; // Object litearls
// Array k andr ham koi bhi data type store krskte ha;
let mixed = [2,3.5,"string",null,undefined];
console.log(mixed[1]);
console.log(fruits[2]);

// index Change;
let Eat = ["apple", "Banana", "Mango"];
Eat[1] = "Cherry";
console.log(Eat[1]);
console.log(typeof Eat);

// How can we know that array is array;
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj)); // -->> is false
// Array Indexing