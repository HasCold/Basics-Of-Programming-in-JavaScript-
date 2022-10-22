// ********************* Prototype***************
// const Usermethod = {
//     about : function(){
//         return`${this.firstName} ${this.LastName} is ${this.age} years old`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing : function(){
//         return `adbasj asjkdnas asjdab dba `;
//     }
// }
// __proto__ simple ak refernce ha jo bhi ap chain create karoge;

function createUser(firstName,LastName,age,email,address){
    const user = Object.create(createUser.prototype); // Object __proto__ ; ye proto ma jakr about() method call karega; Ab ap hazar method banao ya jitne bhi banao apka har method call hogae ga sirf is line ki wajah se; __proto__ bond create kraha ha is user object ka aur createuser prototype object ka; Ab JS ko jo bhi method yahan nahi milega tu wo dosre obj ma check karega
    // ** Object.create() __proto__ property ko set krdeta tha user ko Usermethod ke equal;
    user.firstName = firstName;
    user.LastName = LastName;
    user.age = age;
    user.email = email;
    user.address = address;
    // Ab ma Usermethod ka refernece call karaha hu yani Usermethod JS ma kahi store hogaya ha aur ma ab bas usko call karrah hu like Below:-

    // Jo mujhe  apne object ma chyie tha sab  return krdia ha tu object (user) ko bhi return karunga
    return user;
}
// Matlab mere jitne bhi user honge unsab k same method memory ma store honge; yani har user k liye same method ban raha ha memory ma; Tu hum in do methods ko alag se Object ma bana lenge like in (Usermethod)

// *console.log(createUser.prototype); // agr function ma prototype given ha tu ma is prototype ma add kardunga above methods ko; Below are the adding steps; Jab function ma mjhe free ki space de rakhi ha prototype object ki tu ma usko use karunga
createUser.prototype.about = function(){
    return`${this.firstName} ${this.LastName} is ${this.age} years old`;
};
createUser.prototype.is18 = function(){
    return this.age >= 18;
};
createUser.prototype.sing = function(){
    return `la la la aalala`;
};

const user1 = createUser("Muhammad Hasan","Ali",21,"ha03330224926@gmail.com","Myaddress");
const user2 = createUser("Muhammad Umer","Ali",18,"ha03330224926@gmail.com","Umeraddress");
const user3 = createUser("Muhammad Talha","Ali",19,"ha03330224926@gmail.com","Tysionaddress");

console.log(user1);
console.log(user1.about());
console.log(user1.sing());

