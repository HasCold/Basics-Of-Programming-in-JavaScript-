// Function returning function;

function myfunc(){
    function Hello(){
        console.log("Hello world");
    }
    return Hello;
}

const ans = myfunc();
// console.log(ans);
ans();  // Function returning function