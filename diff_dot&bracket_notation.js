// Difference Between Dot and Bracket notation ;

const key = "Email";
const person = {
    name:"Hasan",
     age:22,
    //  if  we want to give the two words in our key value then it should be in double inverted commas " ";  
    "person Hobbies": ["Guitar", "Sleeping", "Listening"]
}

console.log(person["person Hobbies"]); // We have to access this properties with the [] brackets

person[key] = "ha03330224926@gmail.com"; // we have to write the E-mail word in the person array; so we have to remove string commas fromthe key word;
console.log(person);
