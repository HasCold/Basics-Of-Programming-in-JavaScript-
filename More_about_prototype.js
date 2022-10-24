let number = [1,2,3];
// Array ke methods JS ko prototype se mil rahe ha
// Prototype
// prototype -->> functions
// Internally JS create array like this below method
let numbers = new Array(1,2,3); // Array() ke prototype ma sare methods pare ha
console.log(Array.prototype);
console.log(number);

console.log(Object.getPrototypeOf(numbers)); // JS ma ye array bhi object hote ha

function hello(){
    console.log("hello");
}
console.log(hello.prototype);  // hello ka prototype hame object hi milega

