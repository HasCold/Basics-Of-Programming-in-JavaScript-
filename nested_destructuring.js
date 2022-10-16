//  Destructuring --> By destructuring, it is possible to extract a specific part from the main body, so it can be modified easily as needed.
// Nested Destructuring; 

const users = [
    {userId : 1, firstName : "Hasan", gender:"Male"},
    {userId : 2, firstName : "Umer", gender:"Male"},
    {userId : 3, firstName : "Talha", gender:"Male"},    
]

// Mane three variable bnalia jis ma se  user1 ha aur wo object 1 ko store kraha ha
const [user1, user2, user3] = users;
console.log(user1);

// lkn agr mjhe pure object ke bajae sirf object ke firstName ya gender destructure krna ha tu below method will be applicable square bracket k andr curly braces use krke kiya jakstah ha;

//      object1,object2,object3
const [{firstName: UserfirstName}, , {gender: user3gender}] = users;
console.log(UserfirstName);
console.log(user3gender);
