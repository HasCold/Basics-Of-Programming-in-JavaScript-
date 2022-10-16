"use strict"
// break keyword;

// continue keyword;

// for (let  i= 1;  i<=10; i++) {
//         if (i===5) {
//             break;
//         }
//     console.log(i);
// }

for (let  i= 1;  i<=10; i++) {
    if (i===6) {
        continue;
    }
console.log(i);
}
console.log("Hello Dear ");
console.log("Hasan");

// But in the case of do-while loop our code execution runs atleast one time if the condtion will be false;

var j = 10;

do {
    console.log(j);
    j++;
} while (j<=9);
console.log(`Value of j is ${j}`);