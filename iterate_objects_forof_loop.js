// How to iterate objects;
const person = {
    name: "Hasan",
    age: 22,
    "person hobbies":["Guitar", "Sleeping", "Listening"],
}

for(let key of Object.keys(person)){
    console.log(person[key]);
}