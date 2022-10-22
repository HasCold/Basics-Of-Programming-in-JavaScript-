// ******************New Keyword ********************
// new keyword;
// 1.  Create empty object this = {}
// 2.  sab cheezai add krke return this{} krdeta ha 
// 3.  Object.create(createUser.prototype) ye relation banane wala kaam new keyword khud bana ke dega 

// __proto__
// Official EcmaScript Documenatation
// [[prototype]], __proto__  -->>> Both are same so don't be confused
// __proto__ sets equal to the prototype;

function CreateUser(firstName,LastName,age,email,address){
    // ** Object.create() __proto__ property ko set krdeta tha user ko Usermethod ke equal;

    this.LastName = LastName;
    this.firstName = firstName;
    this.age = age;
    this.email = email;
    this.address = address;
    // Ab ma Usermethod ka refernece call karaha hu yani Usermethod JS ma kahi store hogaya ha aur ma ab bas usko call karrah hu like Below:-

    // Jo mujhe  apne object ma chyie tha sab  return krdia ha tu object (user) ko bhi return karunga
    // return this; // ** Yahan pr new keyword khud se return krta ha tu ye likhne ki zaroorat nai ha
}
// Matlab mere jitne bhi user honge unsab k same method memory ma store honge; yani har user k liye same method ban raha ha memory ma; Tu hum in do methods ko alag se Object ma bana lenge like in (Usermethod)

// *console.log(createUser.prototype); // agr function ma prototype given ha tu ma is prototype ma add kardunga above methods ko; Below are the adding steps; Jab function ma mjhe free ki space de rakhi ha prototype object ki tu ma usko use karunga
CreateUser.prototype.about = function(){
    return`${this.firstName} ${this.LastName} is ${this.age} years old`;
};
CreateUser.prototype.is18 = function(){
    return this.age >= 18;
};
CreateUser.prototype.sing = function(){
    return `la la la aalala`;
};

const user1 = new CreateUser("Muhammad Hasan","Ali",21,"ha03330224926@gmail.com","Myaddress");
const user2 = new CreateUser("Muhammad Umer","Ali",18,"ha03330224926@gmail.com","Umeraddress");
const user3 = new CreateUser("Muhammad Talha","Ali",19,"ha03330224926@gmail.com","Tysionaddress");

console.log(user1);
console.log(user1.about());
console.log(user1.sing());

