class Animal{
    constructor(name, age){ // The name of the constructor must be the same as the name of the class.
        this.name = name;
        this.age = age; 
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}

// Now we have to make Object

const animal = new Animal("tom",2);

//***************** ************/ Inheritance;

class Dog extends Animal{
    // Animal -->> Base Class / Parent class;
    // Dog -->> Derived Class / Sub-class;  Base class ko extends karke sub-class bani
    // Dog class ke object ke pass sari ki sari properties ha jo Animal class ke andr ha

}    
const tommy = new Dog("Timmy", 5); // Object ko hum instance bhi bolte ha
console.log(tommy);
console.log(tommy.isSuperCute());



