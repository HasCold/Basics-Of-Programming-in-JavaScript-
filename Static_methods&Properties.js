// ***************Static methods and properties
// Static methods directly class se related hote ha ma inko object bana ke call nahi karskta 

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){ // static method can only invoked by class name 
        return `This is Person class`;
    }
// Static Property :-
    static desc = "Static Property class";        
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
    // ye sare methods relate ha mere instance / objects se
    // IMP:- Ye sare methods mere objects se related ha jse person1 object hi inko call karskta ha
    eat(){
        return `${this.firstName} is eating`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}

const person1 = new Person("Muhammd Hasan","Ali",20);
console.log(person1.eat());
// person1.classInfo(); -- >> Gives you the error

console.log(Person.classInfo()); // static method invoked by Person class
console.log(Person.desc); //  Static Property class also invoked by Person name class 
