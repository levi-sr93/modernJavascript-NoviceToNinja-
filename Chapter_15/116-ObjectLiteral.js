const userOne = {
    username: 'Ryu', 
    email: 'ryu@streefight.com',
    login(){
        console.log("You've logged in");
    }, 
    logout(){
        console.log("User logged out");
    }
}

console.log(userOne.email, userOne.username)
userOne.login();

const userTwo = {
    username: 'Chun Li', 
    email: 'chunl@streefight.com',
    login(){
        console.log("You've logged in");
    }, 
    logout(){
        console.log("User logged out");
    }
}

console.log(userTwo.email, userTwo.username)
userOne.login();