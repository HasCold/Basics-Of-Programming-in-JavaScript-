// Find Method In JSON;

// It also Takes a callback function

const myArr = ["Hello", "cat","dog", "lion"];

function isLength(string){
    return string.length === 3;
}

const three =  myArr.find(isLength);
console.log(three);

// *********************Realistic Example****************;

    const user = [
    {userID : 1, userName : "Hasan"},
    {userID : 2, userName : "Umer"},
    {userID : 3, userName : "Talha"},
    {userID : 4, userName : "Saad"},
    {userID : 5, userName : "Asif"},
]
                            // callback Function   
const TofindU = user.find((users)=>users.userID===3);
console.log(TofindU);
