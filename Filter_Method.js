// Filter Method;  Array Method

// filter function hamseha true ya false return karega;

const numbers = [1,2,3,4,5,6,7,8,9];

const isEven = function(number){
    // Hame boolean return krna ha true ya phr false;

    return number % 2 === 0;
}

const EvenNum = numbers.filter(isEven);  // callback function pass karenge;

console.log(EvenNum);