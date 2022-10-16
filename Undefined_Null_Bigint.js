// undefined;
// null;

let firstName; // undefined variable
console.log(typeof firstName);
// but not in the case of 'const' it gives u error;
firstName = "Hasan";
console.log(typeof firstName, firstName);

let myvar = null;
console.log(myvar);
myvar = "Hasan";
console.log(myvar);
console.log(typeof null);
// Null is a bug or error in JS so why it can't fix? b/c every framework or library written on JS must wanted to changed so they didn't fix the bug; 
// Bug, error 

// BigInt
let MyNum = 123;
console.log(MyNum);
console.log(Number.MAX_SAFE_INTEGER); // Iska matlab JS ma maximum kitna bara number store krskte ha;
// so we have to use BigInt
let num1 = BigInt(14511115156146456456456564);
console.log(num1);
// if we put "n" at the end of number so it also means as a BigInt number; 
let num2 = 126n;
let num3 = BigInt(14);
// But if we add other data types with BigInt it gives u error; So we must add BigInt + BigInt = formally correcct;
console.log(num2 + num3);