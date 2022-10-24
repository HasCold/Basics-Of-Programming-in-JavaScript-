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
class Dog extends Animal{
    // Animal -->>Super Class / Base Class / Parent class;
    // Dog -->> Derived Class / Sub-class;  Base class ko extends karke sub-class bani
    // Dog class ke object ke pass sari ki sari properties ha jo Animal class ke andr ha

    constructor(name, age, speed){
        super(name, age)  //  Animal class is the super class
    this.speed = speed;
    
    }
    eat(){
        return `Modified Eat:- ${this.name} is eating`;
    }
    run(){
        return `${this.name} is running at a speed of ${this.speed} km/hr`
    }

}
// Object ko hum instance bhi bolte ha
const Tommy = new Dog("Timmy", 10, 55);     
console.log(Tommy);
console.log(Tommy.run());
console.log(Tommy.eat()); //  JS na dekha Dog class ka pas eat() ha kya agr nahi ha tu chalo uske super class / Base Class ma dekhte ha tu use mil gaya 



