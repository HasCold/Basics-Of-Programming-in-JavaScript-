// string concatenation;

let str1 = "17";
let str2 = "20";
let new_str = str1 + str2; // -->> 1720 bc it is string;
console.log(new_str);

// After put the + sign at the start of string it becomes number ;
let New_Has = +str1 + +str2;
console.log(New_Has);
console.log(typeof New_Has);