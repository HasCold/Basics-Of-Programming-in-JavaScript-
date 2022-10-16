// and or operator

let firstName = "Hasan";
let age = 20;

if (firstName[0] === "H" && age>=18) {
    console.log("Valid Name");
}

if (firstName[0] === "H" || age === 18) {
    console.log("Only one or two condition may be valid")
}
else{
    console.log("Both are False");
}