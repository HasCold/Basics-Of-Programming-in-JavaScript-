const obj1 = {
    key1 : "value1",
    key2 : "Unique",
}

const obj2 = Object.create(obj1);// Empty Object // Yahan pr JS ne obj1 and obj2 ka kuch na kuch relation bana diya ha ab undefined  nahi de raha
// const obj2 = {};
// console.log(obj2);

// Ma chahta hu JS agr key2 value pair obj2 ma nahi find krta tu wo khud obj1 ma jakr key2 ki value dekha ga ; Object.create() se this is happening

obj2.key3 = "Value3";
console.log(obj2.key2);
console.log(obj2.__proto__); // yani is obj2 pr proto set kraha ha obj1 ko
// obj2 ka __proto__ obj1 hogaya
// __proto__
// Official EcmaScript documentation
// [[prototype]]

// __prototype__ , [[prototype]]  -->> Both are different 

