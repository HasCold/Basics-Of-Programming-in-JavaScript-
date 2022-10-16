// For Loop Array;

let fruits = ["Apple", "Banana", "Mango", "Pineapple"];
console.log(fruits.slice(0,4));

// for(let i=0; i<=9; i++){
//     console.log(i);
// }

// console.log(fruits.length);
// console.log(fruits[fruits.length-1]);


for (let i = 0; i < fruits.length; i++) {
    console.log(i);
    console.log(fruits[i].toUpperCase());    
}

// if we want to push those elements in the array2;

let Fruits2 = [];
for (let i = 0; i < fruits.length; i++) {
    Fruits2.push(fruits[i].toUpperCase());
}
console.log(Fruits2);
