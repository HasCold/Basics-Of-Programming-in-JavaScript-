// Create Function to create multiple objects

const user1 = {
    firstName : "hasan",
    age : 20,
    email : "ha03330224926@gmail.com",
    address : "R-798 Block-16 Federal.B.Area",
    about : function(){
        return `${this.firstName} is ${this.age} old`
    },
    is18 : function(){
        return this.age >= 18;
    }
}

// 1. Function (that function create object)
// 2. add key value pair
// 3. Object ko return karega

function createUser(firstName,LastName,age,email,address){
    const user = {}; // Object
    user.firstName = firstName;
    user.LastName = LastName;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = function(){
        return`${firstName} ${LastName} is ${age} years old`
    };
    user.is18 = function(){
        return this.age >= 18;
    }
    // Jo mujhe  apne object ma chyie tha sab  return krdia ha tu object (user) ko bhi return karunga
    return user;
}
const user2 = createUser("Muhammad Hasan","Ali",21,"ha03330224926@gmail.com","Myaddress");
console.log(user2);
// hamara func return karega tu jo return karega usko ham varaiable ma store kara lenge 
const ABout = user2.about(); // ye hame retrun karega value
console.log(ABout);
const is18 = user2.is18();
console.log(is18);


