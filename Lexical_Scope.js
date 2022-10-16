// ***************Lexical Scope;

const myVar2 = "value2";

function My_App(){
    const myVar = "value1";

    // Agr Hamare myFunc() ma myVar define nahi ha tu javascript us ko lexical environment ma findout karegi ; myFunc myApp ke andr define ha tu iska lexical environment myApp hua; 
    function myFunc(){
        // const myVar = "value59";
        console.log("INside my function",myVar);
    }

    const myFunc2 = function(){}
    const myFunc3 = () => {}
    
    console.log(myVar);
    console.log(myVar2); // ye function myVar2 ki value ko Global/lexical Scope ma check karega
    myFunc();
}

My_App();