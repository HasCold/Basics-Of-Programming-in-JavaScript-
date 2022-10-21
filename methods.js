//*************************** */ methods *********************
// methods :- Functions inside objects ; Agr ap kisi function ko object k andr likh rahe ha tu wo method hote ha

const person = {
    firstName : "Hasan",
    age : 10,
about : function(){
    // Template string :- ``
    console.log(this); // this is a object and we can extract the value from this like below -->>
    // console.log(`Person name is ${this.firstName} and age is ${this.age}`)
}
}
person.about(); // Call the function

// Basically what is "this" 
// this  ak object  ha yani this ak pura person object ha jis ma se hum firstName aur age ki value utha rahe ah 
