// Reduce Method;

const number = [1,2,3,4,5,10];

// aim : Sum of all the numbers in Array;

const sum = number.reduce((accumulator, currentValue)=>{  // reduce method ma callback function use karenge thorugh arrow function;
    return accumulator + currentValue;
},100); // Thorugh this way we can  pass the initial value in the accumulator;

console.log(sum);  // Gives u the sum of 125;

// Process of Tracking the accumulator and currentValue in the reduce method:-

// accumulator + currentValue   =   return;
//   1             2                  3
//   3             3                  6
//   6             4                  10
//   10            5                  15
//   15            10                 25 


const userCart = [
    {productid : 1, productName : "mobile", price : 12000},
    {productid : 2, productName : "laptop", price : 22000},
    {productid : 3, productName : "T.V.", price : 25000},
]

const TotalAmount =  userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price
},0)
console.log(TotalAmount);

// totalprice    +      currentValue     =    return
//   0                      {price}            12000
// 12000                    22000              34000
// 34000                    25000              59000  
