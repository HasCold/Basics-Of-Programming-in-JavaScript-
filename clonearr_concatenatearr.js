// clone array and concatenate two arrays;

let arr1 = ["item1", "item2"];
// let arr2 = ["item1", "item2"];

// Second method to clone Array; slice method:- means 0 index se pass hokr end tak gaye ga; And if we wnat to join more elemnets in the array2 then do the concat();
let arr2 = arr1.slice(0).concat(["item3", "item4"]);

// Third method to clone Array; basically concatenate joins the two arrays;
// let arr2 = [].concat(arr1);

// New and easy way to clone the Array;
// spread opeartor -->>
let OneMore_array = ["item3", "item4"];
let arr3 = [...arr1,...OneMore_array];

arr1.push("item3");
console.log(arr1 === arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);