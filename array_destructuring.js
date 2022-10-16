// Array Destructuring -->> By destructuring, it is possible to extract a specific part from the main body, so it can be modified easily as needed.;

const myArr = ["value1", "value2", "value3", "value4", "value5"];
// let myvar1 = myArr[0]; -->> It is also a right way to copy the value from the array;
// let myvar2 = myArr[1];
// console.log(`Value of var1: ${myvar1}`);
// console.log(`Value of var2: ${myvar2}`);

// Destructure the Array;
// const [var1, var2] = myArr; if you create a constant variable array then you can't change the variable value;

// if we want to store the the value3 in var2 then we should gap the empty index  array; 
let [var1, , var2,...my_New] = myArr; // we include the rest of the value in my_New array;
var1 = "value Changed";
// let my_new = myArr.slice(2);
console.log(`Value of var1: ${var1}`);
console.log(`Value of var2: ${var2}`);
console.log(`Value of my_New var = ${my_New}`);
