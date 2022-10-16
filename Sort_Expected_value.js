// Sort Expected Value

const numbers = [5,9,110,2,45,30,100];
numbers.sort((a,b)=>{
    // return a-b; // IN Ascending Order But if we want to descending order
    return b-a;
})
console.log(numbers);

// 110, 100
// a-b -->> positive (Gretaer than 0)

// ********************Realistic Example;********************

// Price LOw to Height; 

const Products = [
    {productID : 1, prdouctName : "p1", Price : 300},
    {productID : 2, prdouctName : "p2", Price : 4000},
    {productID : 3, prdouctName : "p3", Price : 200},
    {productID : 4, prdouctName : "p4", Price : 8000},
    {productID : 5, prdouctName : "p5", Price : 5000},
]
// Low to High;
const LowtoHigh = Products.slice(0).sort((a,b)=>{  // Now we can get the sort products
    return a.Price-b.Price;
})
console.log(LowtoHigh);

// High to Low;
const HightoLow = Products.sort((a,b)=>{
        return b.Price - a.Price;
})
console.log(HightoLow);

