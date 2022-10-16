// For  Each Loop; foreach method har ak element k liye callback krdega function 

const user = [
    {firstname : "Hasan", age : 30},
    {firstname : "Huzaifa", age : 28},
    {firstname : "Talha", age : 25},
    {firstname : "Umer", age : 20},
]

user.forEach(function(users){ // users is an parameter and we have to give the arguments which is alreaddy passed
    console.log(users.firstname);
});

user.forEach(users => {   // arrow function
    console.log(users);
});