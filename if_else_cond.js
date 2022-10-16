// if_else CSSConditionRule;

let age = 17;

if(age>=18){
    console.log("User can play the Game");
}
else{
    console.log("Below 18, User can't play the Game");
}

let num = 14; // aise hi jab koi num ko 2 se divide karenge tu remainder  0 ayega;
if (num%2 === 0) {
    console.log("Even Number");
}
else{
    console.log("Odd Number");
}


console.log(9%3);// remainder --> 0
console.log(9%4);// remainder --> 1

// falsy values

// false
// ""
// null
// undefined
// 0

// truthy values
// "abc"
// 1, -1


let firstName = "";

if (firstName) {
    console.log(firstName);
}
else{
    console.log("firstName is kinda empty");
}