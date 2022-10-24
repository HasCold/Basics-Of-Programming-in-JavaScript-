// Getters and Setters

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullname(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullname(fullname){
        // fullname.split(" ")
        // [Umer, Ali]
        const [firstName,lastName] = fullname.split(" "); // ye string ki list bana ke dega aur wahan se thode ga jahan pa  gap hoga in between aur list ko hi destructure krraha ha ham;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person1 = new Person("Muhammad Hasan","Ali",10);
// console.log(person1.fullname()); -->> Muhammad Hasan Ali

// Ab ma fullname ko internal property ki tarah use karskta hu without parenthesis by putting the "get"
console.log(person1.fullname); // get-->> Treats like a property
//  person1.setname("Umer","ali"); //Below the two nlines are equivalent to this lines 
// person1.firstName = "Umer";
// person1.lastName = "Ali";
person1.fullname = "Umer Ali";
console.log(person1.firstName);
console.log(person1.lastName);

