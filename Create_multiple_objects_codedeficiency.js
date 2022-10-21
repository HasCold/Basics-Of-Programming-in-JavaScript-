//    ***************Code Deficiency Resolve*************
const Usermethod = {
    about : function(){
        return`${this.firstName} ${this.LastName} is ${this.age} years old`
    },
    is18 : function(){
        return this.age >= 18;
    }
}

function createUser(firstName,LastName,age,email,address){
    const user = {}; // Object
    user.firstName = firstName;
    user.LastName = LastName;
    user.age = age;
    user.email = email;
    user.address = address;
    // Ab ma Usermethod ka refernece call karaha hu yani Usermethod JS ma kahi store hogaya ha aur ma ab bas usko call karrah hu like Below:-
    user.about = Usermethod.about; // Usermethod ki address ko copy krlia
    user.is18 = Usermethod.is18;
    // Jo mujhe  apne object ma chyie tha sab  return krdia ha tu object (user) ko bhi return karunga
    return user;
}
// Matlab mere jitne bhi user honge unsab k same method memory ma store honge; yani har user k liye same method ban raha ha memory ma; Tu hum in do methods ko alag se Object ma bana lenge like in (Usermethod)

const user1 = createUser("Muhammad Hasan","Ali",21,"ha03330224926@gmail.com","Myaddress");
const user2 = createUser("Muhammad Umer","Ali",18,"ha03330224926@gmail.com","Umeraddress");
const user3 = createUser("Muhammad Talha","Ali",19,"ha03330224926@gmail.com","Tysionaddress");

console.log(user1.about());
console.log(user3.about());



