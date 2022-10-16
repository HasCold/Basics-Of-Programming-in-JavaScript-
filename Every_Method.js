// Every Method 

const numbers = [2,4,6,8,9,10];

function isEven(number){   // ye conditon start se end tak chgalegi lkn jab isko ak bhi wrong ans milega tu false show hoage ga; 
    return number % 2 === 0;  // "Every method" ka matlab ye wali condition har element par satisfy honi chayie
}

const ans = numbers.every(isEven);
console.log(ans);


// ******************Realistic Example****************

// Check every product price < 30000

const userCart = [
    {productID : 1, prdouctName : "p1", Price : 25000},
    {productID : 2, prdouctName : "p2", Price : 4000},
    {productID : 3, prdouctName : "p3", Price : 20000},
    {productID : 4, prdouctName : "p4", Price : 8000},
    {productID : 5, prdouctName : "p5", Price : 5000},
]

const False = userCart.find((user)=>user.Price<30000);
console.log(False);
const CheckPrice = userCart.every((user)=>user.Price<30000); // --> True; every method checks all the elment and then gives whether the ans is true or false;
console.log(CheckPrice);