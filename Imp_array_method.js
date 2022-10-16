// Imp Array Methods;

// foreach;
// Map;
//Filter;
// reduce

// We created array;

const Numbers = [4,56,7,3,9];

// function mulitplyNum(number, index){
//     // console.log(`Index is ${index}`);
//     // console.log(`Multiply number is ${number}*2 = ${number*2}`);
//         console.log(`Index is ${index}`);
//         console.log(`Multiply number is ${number}*2 = ${number*2}`);        
// }
// for (let i = 0; i < Numbers.length; i++) {

//     console.log(i);
//     mulitplyNum(Numbers[i], i);
// }


// For Each Method; foreach apka number aur index khud pass krdega; is a callback function

Numbers.forEach(function(number, index){ // we have created the anonymous function;
    console.log(`Index is ${index}`);
        console.log(`Multiply number is ${number}*2 = ${number*2}`);        
console.log(`${number}*2 = ${number*2}, index : ${index}`);
});