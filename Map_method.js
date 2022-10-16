// Map Method in JS;

const numbers = [3,4,6,1,8];

// map as  a input  callback function lega callback function bahr bhi bana skte ha aur andr bhi ;

// const square = (number) =>{
//     return number * number;
//}

 // Agr ap map function use kraha ha tu ap return kare console.log na kare take function ko callback krte waqt undefined na ho 

const squareNUm = numbers.map((number, index) =>{
   // callback function ha ye kuch na kuch return karga
return `index : ${index}, ${number * number}`;
}); 
console.log(squareNUm);

// Relaistic Example For Map ;

const users = [
    {firstname : "Hasan", age : 30, gender : "Male"},
    {firstname : "Taha", age : 32, gender : "Male"},
    {firstname : "Umer", age : 25, gender : "Male"},
]

function user(userN){   // Parameter ke andr argument pass karayege; Through callback function map method;
    return userN.firstname;
}

const UserName = users.map(user);
console.log(UserName);