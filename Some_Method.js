// Some Method in JSON;

const numbers = [3,5,8,9];

// kya  ka bhi number aisa ha jo even ha;
// true -->> ka matlab ak number ha jo even ha 

const ans = numbers.some((number)=>number%2===0);
console.log(ans);

// ********************Realistic Example*************

// Matlab mere cart ma koi bhi Product aesa nahi ha jis ka price exceed kraha hu 100000 se;
//-->>    False;

const userCart = [
    {productID : 1, prdouctName : "p1", Price : 25000},
    {productID : 2, prdouctName : "p2", Price : 4000},
    {productID : 3, prdouctName : "p3", Price : 20000},
    {productID : 4, prdouctName : "p4", Price : 8000},
    {productID : 5, prdouctName : "p5", Price : 5000},
]

const User = userCart.some((cartItem)=>cartItem>100000);
console.log(User);