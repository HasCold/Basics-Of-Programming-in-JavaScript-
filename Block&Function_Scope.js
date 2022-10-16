// Block Scope vs Function Scope;
// let and const are block scope;
// var  is functionscope;

// Block :- {
    // It is called as Block;
// } 
{
    const firstname = "Hasan"; // Ap let and const ko usi Block ma access krskte ho ussse bahar access nahi krskte;  
    console.log(firstname);
}

{
    const firstname = "Umer";
    console.log(firstname);
}

{  // But in the case of  var we can access the function name throughout the BLOCK 
    var firstname = "Talha"; // matlab  ham puri file ma ak "var" bnana kar kahi bhi use krskte ha;
}
console.log(firstname);
{
    // For Example ; Other BLOCK can also access the var variable ;
    console.log(firstname);
}

function myApp(){
    if(true){
    let Secondname = "Garima";
    console.log(Secondname);
    }
    // console.log(Secondname); // Gives you a error bc let variable is a block function can't access outside the block;
}
myApp();