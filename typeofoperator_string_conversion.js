// typeof operator

// data types (primitive data types )
// string "hasan"
// number 2, 4, 5.6
// booleans
// undefined;
// null;
// BigInt;
// Symbol;

// From typeof operator we know the data Types; 

let age = 22;
let first = "Hasan";
console.log(typeof age);

// convert number to string;
// 22 ---> "22" If you put double inverted commas on the number 22 then it becomes string;
// age = age + "";
console.log(typeof (age + "")); 

// convert string to Number;
let My_str = "22"; // "22" --> string
// My_str = My_str - ""; //remove inverted commas from string;
My_str = +"22"; 
console.log( typeof My_str);


// 2nd method to change the string and Number;
let year = "34"; //Change into Number;
year = Number(year);
console.log(typeof year);

year = 40; //Change into String;
year = String(year);
console.log(typeof year);
