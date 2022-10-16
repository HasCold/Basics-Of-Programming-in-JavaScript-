// Primitive  vs Reference data type

let num1 = 6;
let num2 = num1;
console.log(`Value of num1 is ${num1}`);
console.log(`Value of num2 is ${num2}`);
num1++;
console.log("After incrementing num1");
console.log(`Value of num1 is ${num1}`);
console.log(`Value of num2 is ${num2}`);

// reference Types
// 1. Array;
let arr1 = ["item1", "item2"];
let arr2 = arr1;
console.log("array1:", arr1);
console.log("array2:", arr2);
arr1.push("item3");
console.log("array1:", arr1);
console.log("array2:", arr2); 