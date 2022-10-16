// Iterables;
//  Jispe hum for of loop laga sakein;
// string , array are iterable

const firstname = "Hasan";
for (let char of firstname) {
    console.log(char);
}

const items = ["item1", "item2", "item3"];
for (let item of items) {
    console.log(item);     // So it means both string and array are iterable
}

// Object(user) is not iterable ;
// const user = {"key1" : "value1", "key2" : "value2"};
// for (let item of user) {
//     console.log(item);
// }

// Array like Object
// jinke pas length property hoti ha;
// aur jisko hum index se access kar skte ha;
// Example : - string

const First = "Hasan";
console.log(First.length);
console.log(First[2]);
