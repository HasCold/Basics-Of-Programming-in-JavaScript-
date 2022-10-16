// How to iterate objects;
const person = {
    name: "Hasan",
    age: 22,
    "person hobbies":["Guitar", "Sleeping", "Listening"],
}

// for in loop;
// Objects.keys;

for (var key in person) {
        // console.log(key); // shows the index name ; sari ki sari key print horahi ha;
     console.log(`${key} : ${person[key]}`); // Here we are using template string;

    // Second way to print the key pair values
    console.log(key,":",person[key]);
    

    console.log(Object.keys(person));
    const val = Array.isArray(Object.keys(person));
    console.log(val);
}