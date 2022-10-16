// Object Destructuring -- >> By destructuring, it is possible to extract a specific part from the main body, so it can be modified easily as needed.

const Pop = {
    bandname : "led zepplin",
    famousSong : "Stairway to Heaven ",
    Year : 1968,
    AnotherFamousSong : "Kashmir",
}

// const var1 = Pop.bandname;
// const var2 = Pop.famousSong;
// console.log(var1,var2);

// Short Cut Method;

// By-Default bandname aur famousSong variable honge; Agr specify krna ha tu below method will be applied;
// const {bandname:var1,famousSong:var2} = Pop;

// RestProps variable constains all rest values in it 

const {bandname,famousSong,...RestProps} = Pop;
console.log(bandname,famousSong);
console.log(RestProps);// 1968 and Kashmir value store;