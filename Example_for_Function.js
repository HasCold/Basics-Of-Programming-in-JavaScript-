// is Even
//  input : 1 number
// output : true, false;

// Even :- 2 se divide hoke agr remainder 0 agaya tu even number hoga;
function isEven(Number){
    if (Number % 2 === 0) {
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(2));

// One Line Statement;
// console.log(Number%2===0);

// Another Example;

function firstChar(AnyString){
    return AnyString[0]; // return H;
}
console.log(firstChar("Hasan"));

// Another Example;

function target(array, target){
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }        
    }
    return -1;
}
const myarr = [2,4,6,9,3];
console.log(`Target Index : ${target(myarr,9)}`);
