// Parameter Destructuring

// Object 
// Used in React (JS framework)

const person = {
    First_name : "Hasan",
    gender : "Male"
}

// function getDetails(obj) {
//     console.log(obj.First_name);
//     console.log(obj.gender);    
// }

function getDetails({First_name,gender}){
    console.log(First_name);
    console.log(gender);
}
getDetails(person);