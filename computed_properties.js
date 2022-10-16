// Computed Properties;

const key1 = "objkey1";
const key2 = "objkey2";
 
const value1 = "myValue1";
const value2 = "myValue2";

// We have to print below thing;
// const obj = {
//     objekey1 : "myvalue1",
//     objekey2 : "myvalue2"
// }

const obj = {
    [key1] : value1,
    [key2] : value2
    
}
console.log(obj);

console.log("Printing Thing Object");
const thing = {};

thing[key1] = value1;
thing[key2] = value2;
console.log(thing);
