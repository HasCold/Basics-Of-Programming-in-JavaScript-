//  Arrow  Functions;

// Function Expression;
const Sing_HappyB = function(){
    console.log("Happy Birthday to you...");
}

// Arrow Function 
const SingHappyB = () => { 
    console.log("Happy Birthday to you...");
}

SingHappyB();

const SUmThreeNum = (Number1, Number2, Number3) => {

    return Number1+Number2+Number3;
}

const ans = SUmThreeNum(2,3,4);
console.log(ans);

// Arrow Function :- If you have a only one parameter then you have option to use bracket for the function enclosing; 

//  Variable  Parameter  return 
const isEven = number => number % 2 === 0;

console.log(isEven(4));