// trim()
// toUpperCase()
// toLowerCase()
// slice()

let first = "  Hasan  ";
console.log(first.length); // spaces included in string;

// if we want to remove the spaces in string;

first = first.trim(); // "Hasan";
console.log(first);
console.log(first.length);

// UpperCase:-
console.log(first.toUpperCase());

// LowerCase:-
console.log(first.toLowerCase());

// slice() method; 
// Start Index;
// End Index;
let new_s = first.slice(0,5); // Hasa; means print (0 to 3); yani agr 0 - 5 hoga tu 5th index tak nahi jayega 4th index tak ruk jaega;
console.log(new_s);
// if we go for only 1 index; Then it starts from 1;
let new_h = first.slice(1);
console.log(new_h);
