//***************** */ Optional chaining ***************

const user = {
    firstName : "Hasan",
    // Address yaha pr khud ak object ha
    // address : {HouseNumber : "R-798"}
}

console.log(user?.address?.HouseNumber); // ye check karega user k andr address ha aur uske andr HouseNumber bhi ha lkn commentout ha tu wo undefined dedega;
console.log(user.firstName);