// Sets (It is Itearble); Yani k hum for loop laga skte ha
// Store data in linearly form like array
// Set also have its own method
// No index-based access
// Order is not guaranteed
// Unique items only (no duplicates allowed);

// Syntax;
const number = new Set(); // Set ma ak element ak hi bar store hoga duplicate not allowed
number.add(1);
number.add(2);
number.add(3);
number.add(4);
number.add(5);
number.add(6);
// We can add both array in set because both has different addresses; Matlab ham square barcktes laga kr differnet elements  add krskte ha 
number.add(["item1", "item2"]);
number.add(["item1", "item2"]);
if(number.has(1)){
    console.log("1 is present");
}else{
    console.log("1 is not present");
}
console.log(number);
// console.log(number[1]); // -->> undefined cannot access 

for (let item of number) {
    console.log(item);
}

// When we use Set ;
// Jab apke pas unique value ho;

// Is tarah se ham Array ma se unique Element ko Extract krskte ha ;
const myArray = [1,2,3,4,5,6,7,6,5];
const UniqueElements = new Set(myArray);
console.log(UniqueElements);
let length = 0;
for (let element of UniqueElements) {
    length++;
}
console.log(`Length of unique element is ${length}`);