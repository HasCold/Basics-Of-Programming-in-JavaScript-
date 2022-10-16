// use const for arrays


// Heap memory --> ["apple", "mango"];  address(0x11);
// Hum is ke address ko chanege nahi karahe ha humiske constant address ma banana push krahe ha;

// 90% Developers used the const instead of let in the array use case ;  

// From Now we use the const for Array;

const fruits = ["apple", "mango"]; // 0x11
fruits.push("banana");
console.log(fruits);

// For Practice;
// While Loop;

const fruits2 = [];
let i = 0;
while (i<fruits.length) {
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(`Fruits are ${fruits2}`);