// ******************New Keyword************

function createUser(firstName, age){
    // this => {} new keyword na khud this empty object create kiya ha; empty object tha usme hamne key-value pair add krdeye 
    this.firstName = firstName;
    this.age = age;
}

createUser.prototype.about = function(){
    console.log(this.firstName, this.age);
}
const user1 = new createUser("Hasan", 10); // new keyword automatically makes the __proto__
// __proto__ hame prototype   tak paunchai ga

// new keyword;
// 1.  Create empty object this = {}
// 2.  return this{} 
// 3.  Object.create(createUser.prototype) ye relation banane wala kaam new keyword khud bana dega 


user1.about();
