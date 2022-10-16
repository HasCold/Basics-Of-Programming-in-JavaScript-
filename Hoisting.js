//            Hoisting

// We can call or invoke function name in the function declaration but not in the case of function expression and arrow function;


// var Hello = function(){
    //     console.log("Hello World");
    
    // }
    
    Hello();

    function Hello(){
console.log("Hello world");
    }

//   console.log(Bye);  If variable declaration from var then give you undefined; Otherwise let and const gives u error;
  var Bye = "Bye everyone";
  console.log(Bye);
