// ****************Map Object; *********************
// map  is an iterable

// stored data in ordered fashion

// store key value pair (like Object)
// Duplicate keys are not allowed like Object;

// Different between maps and objects;

// Object can only have string or symbol as key;

// IN maps you can use anything as key;
// like Array, number, string

const person = {  // Is syntax ko jis ma hum key value pair add krte ha is also known as object literal
    // key -->> always in the "string" 99% OR
    // key -->> Either in the symbol    1%
    firstName : "Hasan",
    age : 10,
    1 : ":one",
}
// console.log(person.firstName);
// console.log(person["firstName"]);
console.log(person["1"]);
for (const key in person) {
    console.log(typeof key);
}

