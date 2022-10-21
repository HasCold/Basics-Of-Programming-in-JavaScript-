// ************************Call Apply Bind**************

function about(hobby, favshow){
    console.log(this.firstName,this.age, hobby, favshow)
}
const user1 = {
    firstName : "Hasan",
    age : 21,
}

about.call(user1,"Gym", "WWE"); // Borrow and call the func for user1 and user2

const user2 = {
    firstName : "Umer",
    age : 20,
}
const user3 = {
    firstName : "Talha",
    age : 18,
}
// we Have to call the about function for user2 basically we have to borrow func from user1

// Apply; Pass the list 
about.apply(user2, ["Guitar", "WWE"]); // Bind the func with user2; Yahan pr hamne this ki value batadi ke user2 hoga

// Bind; Just  retrun the function it means we have store in a variable  
const func = about.bind(user3, "Cricket", "WWE")
func();
