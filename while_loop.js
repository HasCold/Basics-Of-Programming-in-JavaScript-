// while loop;

// DRY Principle -->> Dont Repeat Yourself

let i = 0;
while (i<=5) { // If condition is true then while block begins;
    console.log(i);
    i++;
}
console.log(`Current value of i is ${i}`); // when i === 6 our conditon becomes false further block doesn't run;

// while loop example

let j = 0;
let total = 0;
while (j<=10) {
    total = total + j;
    // console.log(j);
    j++;
}
console.log(total);
console.log(`Current value of j is ${j}`);