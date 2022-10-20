// ****************Map Object; *********************
// map  is an iterable

// stored data in ordered fashion

// store key value pair (like Object)
// Duplicate keys are not allowed like Object;

// Different between maps and objects;

// Object can only have string or symbol as key;

// IN maps you can use anything as key;
// like Array, number, string

// Map also store the key  value pair; key ki kuch bhi data type hoskti ha 
const person = new Map();
person.set("firstName", "Hasan"); // ("key-value-pair", "value")
person.set("age", 10);
person.set(1, "one");
person.set([1,2,3], "onetwothree");
console.log(person);

// How can we access key-value-pair; get() function

console.log(person.get(1));
console.log(person.keys()); // get all the key-value-pair (Map Iterator)

for (let key of person.keys()) {
    console.log(key, typeof key);
}

for (let [key, value] of person) {
    console.log(key, value);
}

for (let key of person) {
    console.log(Array.isArray(key));
}

const thing = new Map([["firstName", "Hasan"],["age", 10]]);
console.log(thing);


const person1 = {
    ID : 1,
    FirstName : "Hasan",
}

const Extrainfo = new Map();
Extrainfo.set(person1, {age : 21, Gender : "Male"});
console.log("ExtraInfo :",Extrainfo);
console.log(person1.FirstName);
console.log(Extrainfo.get(person1).Gender);