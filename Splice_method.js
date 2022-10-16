// Splice Method; It will change the original array
// start, delete, insert;

// Array ke bech ma se kuch delete krna ha ya insert krna ha;

const myArr = ["item1", "item2", "item3"];

// for delete ;
const Delete = myArr.splice(1,2);  // ye sath  hi sath value return bhi karega; 
console.log(myArr);
console.log(`Deleted Item : ${Delete}`);

// insert
myArr.splice(1,0,"inserted item");
console.log(myArr);

// insert and delete;
const Array = ["item1", "item2", "item3"];

const New = Array.splice(1,2,"inserted item", "inserted item3");
console.log("INserted Items in Array",Array);
console.log(New);

