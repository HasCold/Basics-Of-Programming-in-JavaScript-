// Class Keyword;
// 2015/es6
// class are fake

class CreateUser{
    constructor(firstName,LastName,age,email,address){
        console.log("Constructor Called...")
        this.LastName = LastName;
        this.firstName = firstName;
        this.age = age;
        this.email = email;
        this.address = address; // yahan pr ma kuch return nahi karunga ye khud khud return kardega    
    }
    // class and object k andr function ko ham method kahte ha
    about(){
        return`${this.firstName} ${this.LastName} is ${this.age} years old`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return `la la la aalala`;
    }
    func(a){
        console.log(a);
    }
}
// Hum class ko hamesha new keyword laga kr hi call karenge; new keyword k bina ap object constructor call nahi karskte; Class constructor CreateUser cannot be invoked without "new"

const user1 =  new CreateUser("Muhammad Hasan","Ali",21,"ha03330224926@gmail.com","Myaddress");
// const user2 = new CreateUser("Muhammad Umer","Ali",18,"ha03330224926@gmail.com","Umeraddress");
// const user3 = new CreateUser("Muhammad Talha","Ali",19,"ha03330224926@gmail.com","Tysionaddress");

console.log(user1.is18());
console.log(Object.getPrototypeOf(user1));
user1.func("Hasan");
