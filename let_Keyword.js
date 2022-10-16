// let Kyeword;
// Declare variable with let keyword;

// If you have to create a variable then it is a preferred Option to use a let keyword instead of  var ;

// let firstName = "Mehta";
// console.log(firstName);

// It is not possible to redeclare the variable through let keyword although you can use the var keyword for same operation;

let firstName = "Mehta";
// let firstName = "Mohit"; -->> Shows error
// variable ka kaam ha change hona tu agr ham change krna chate ha tu let keyword again nahi likhenge 
firstName = "Mohit";
console.log(firstName);

// block scope vs function scope(covered later in this JS series)
