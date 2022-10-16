// array push pop
// push pop is fast as compared to the shift unshift;

// array shift unshift

let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits);

// push; It has ability to change the arrays; array mutable
// fruits.push("Grapes");
// console.log(fruits); 


// pop --> Remove last element from array; ye srif remove hi nahi kraha balke return bhi krraha ha;
// pop array ka andr se last element remove kraha ha aur use poppedF varaible ke andr return kraha ha;

let poppedF = fruits.pop();
console.log(poppedF);
console.log(fruits);

// unshift -->> It adds element at the starting of arrays;
fruits.unshift("Pineapple");
fruits.unshift("My fruit");
console.log(fruits); 

// shift -->> It remove elements fromthe starting of arrays; and return that value

let removeF = fruits.shift();
console.log(removeF);
console.log(fruits);
