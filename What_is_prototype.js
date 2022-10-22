// ****************************Prototype**************

function hello(){
    console.log("Hey World");
}

// JavaScript function ====>> function + Object; function function ki tarah kaam tu karegen sath ma object ki tarah bhi work bhi work karege 

// console.log(hello.name);

// You can add your own properties
// hello.myOwnProperty = "Very Unique value";
// console.log(hello.myOwnProperty);

// const hello = ["value"] // Prototype is not present

// name property --->> tells function name;

// functio provides more useful properties;

// ***function gives the free spaces; actual ma free spaces jesa kuch nahi hota free spaces ma empty object {} ko bol raha hai sirf samjhne ke liye apko; {} aur us object ko kehte ha prototype

console.log(hello.prototype);  // -->> gives the free space object{}

// Only function provide the prototype property

if (hello.prototype) {
    console.log("Prototype is present");
}
else{
    console.log("prototype is not present");
}
// Agr mjhe hello name ka prototype object ma koi property add karni ha

hello.prototype.abc = "abc1";
hello.prototype.F = "agvd";
hello.prototype.sing = ()=>{
    return "lalllaa";
}
console.log(hello.prototype.sing());


