// Objects inside array
// Very useful in real world applications;

// Iterate Means -->> To utter or do again or repeatedly;

// const user = [
//       {},
//       {},
//       {},
// ]

// It is the method to store the objects in array and iterate the loop; 

const users = [
    {userId : 1, firstName : "Hasan", gender:"Male"},
    {userId : 2, firstName : "Umer", gender:"Male"},
    {userId : 3, firstName : "Talha", gender:"Male"},
    
]
// console.log(user);

// Iterate the Object By using the for of loop; 
for (let user of users ) {
    console.log(user);
    console.log("UserID :",user.userId);
}
