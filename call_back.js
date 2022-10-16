// Call Back function

function myfunc(callback){ // There is a convention when we callback the function we write callback in function
    console.log("Hello there i am func and i can ...");
    callback("Hasan");
}

function myfunc2(name){
    console.log("Inside my func2 and passing parameter in myfunc");
    console.log(`Your name is ${name}`);
}

myfunc(myfunc2);