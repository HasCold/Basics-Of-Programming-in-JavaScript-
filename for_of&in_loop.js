// for of loop in Array;

const Eat = ["apple", "mango", "banana"];
Eat.push("grapes");
console.log(Eat);

// for of loop utni baar chale ga jitna uske andr array elements honge;
for (let fruit of Eat) {
    console.log(fruit);
    // console.log(typeof fruit);   -->> string 
}

// for in and for of loop akhri index tak chalega;s

// for in loop; hame Index print krke dedega
for (let index in Eat) {
    console.log("index :",Eat[index]);

}