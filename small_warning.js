// Small Warning

const user1 = {
    firstName : "Hasan",
    age : 20,
    about : function(){
        console.log(this);
        console.log(this.firstName, this.age)
    }
}

// user1.about();

// Don't do this mistake ; So we have to bind the func in the variable 

const myfunc = user1.about.bind(user1);
myfunc();

