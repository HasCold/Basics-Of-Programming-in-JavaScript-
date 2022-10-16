// Spread Operator;
// ... -->> It is called as spread opreator;

const arr1 = [1,2,3];
const arr2 = [4,5,6];

// const NewArr = arr1.slice(0,3);
const NewArr = [...arr1,...arr2]; //if we didn't give the ... then array1 or array2 value completely compied;
console.log(NewArr);

// Another method to spread Array;
// const After_NewArr = ["abcd"];
// const After_NewArr = [,...0123456789]; number is not itearable so it gives u a error
const After_NewArr = [..."abcd",..."0123456789"]; // Arrays and string are iterable;  
console.log(After_NewArr);

// Spread Operator in Object case;

const obj1 = {
    key1 : "Value1",
    key2 : "Value2",
    // key1 : "Value59", // baad wali value hamesha pehle value wali ko overwrite karegi;    
};
const obj2 = {
    key1 : "ValueUnique", 
    key3 : "Value3",
    key4 : "Value4",    
};
//const New_obj = {...obj1,...obj2}; // is new object ma key1 ki value ak hi rahi gi jo obj2 se hogi kuyn k mane obj2 ko baad ma spraed kya ha;

// By This method we can get the index and also with their values ;

const Temp = {..."abc"};
console.log(Temp);
console.log("Value at the index 2 :",Temp[2]);
const New_obj = {...["item1","item2"]};
console.log(New_obj);
