let name1 = "Muhammad";
let name2 = "Hasan";
let name3 = "Ali";
new_str = name1 + " " + name2 + " " + name3;
console.log(new_str);

// Template string;
let age = 22;
let FirstName = "Hasan";

// "my name is Hasan and my age is 22 "
// let Aboutme = "my name is " + FirstName + " and my age is " + age;

// These are the template String;
let Aboutme = `my name is ${FirstName} and my age is ${age}`
console.log(Aboutme);