// Function Inside Function;

const app = () => {

     const myFru = () => {  // Arrow Function 
        console.log("Hello My Fruit");
     }   
     function add_two(num1, num2){  // Function Declaration
        return num1 + num2;
     }

    console.log("Inside app");
    myFru(); // Hum function k andr function bana skte ha;
    console.log(add_two(3,4));
} 

app();