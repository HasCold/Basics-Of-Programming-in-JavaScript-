// Default Parameters;

// function addTwo(a,b){
//     if (typeof b === "undefined") {
//         b = 0;
//     }
//     return a+b;
// }
function addTwo(a,b=0){ // Default Parameter
        return a+b;
    }
console.log(addTwo(4)); 

// Rest Parameter;

function myFunc(a,b,...c){  // (...) Spread of operator; 
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
console.log(myFunc(4,3,2,8,9,0,7)); 

// Example :-

function addAll(...Number){
    console.log(Number);
    console.log(Array.isArray(Number));
    let total = 0;
    for (let numbers of Number) {
        total = total + numbers;
    }
    return total;
}
console.log(addAll(1,2,3,4,5));
