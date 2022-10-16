// Sort Method;
// ASCII TABLE
// char : ascii value;

// Sort Method array ko change karega jab ke Map, filter, foreach, original array ko change nahi krraha tha; 

// Sort Means:- it is a method which can mutable any array

// 5,9,110,2,45,30,100
// 2,5,9,30,45,100,110

const numbers = [5,9,110,2,45,30,100]; // JS ma ye numbers sort nahi honge sahi se kuyn ke JS isko numbers se string ma convert karega aur string k basis pr sort karega  like this "5","9" etc so we have the ASCII value of string eg :- "0" : 48, "1" : 49, "2" : 50
const num = numbers.sort();  // sort method is array  ko yahan pr change krega
console.log(num);

// JavaScript sortout the string just  like the dictionary;

const userName = ["hasan", "abc", "umer", "talha", "ABC"]; // But Capital letteres sorting are at the first; tabhi JS ASCII value k basis pr small alphabet ko baad ma sort karega
console.log(userName.sort());


