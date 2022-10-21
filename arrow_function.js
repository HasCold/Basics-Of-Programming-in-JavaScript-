// Arrow function

const user1 = {
    firstName : "Hasan",
    age : 20,
    about : () => {
        console.log(this.firstName, this.age) //  arrow function ke andr jo this hota ha wo apne surrounding se leta ha; arrow func ka this nahi hota
    } // Agar simple func hota tu user1 this hota tu hame aik level upar jana hoga yani this => window hoga
}
user1.about.call(user1);

// *****************Short Syntax******************

const user2 = {
    firstName : "Umer",
    age : 20,
    about(){   // Object ke andr jo function hote ha unhi ko hum method kehte ha
        console.log(this.firstName,this.age)
    }
}

user2.about();
