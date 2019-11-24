class User {
    constructor(username, email) {
        //Set up properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login() {
        console.log(`${this.username} just logged in`);
        return this;
    }

    logout() {
        console.log(`${this.username} just logged out`);
        return this;
    }

    incScore() {
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`)
        return this;
    }
}

class Admin extends User {
    constructor(username, email, title) {
        super(username, email);
        this.title = title;
    }

    deleteUSer(user) {
        users = users.filter(eachUser => eachUser.username !== user.username)
    }
}

const userOne = new User('Mario', 'Mario@nitendo.com');
const userTwo = new User('Luigi', 'Luigi@nitendo.com');
const AdminOne = new Admin('Yoshi', 'yoshi@nitendo.com', 'black-belt-ninja');

console.log(userOne, userTwo, AdminOne);
// userOne.login();    
// userOne.logout();
userOne.login().incScore().incScore().logout();
AdminOne.login();

let users = [userOne, userTwo, AdminOne];
console.log(users);

AdminOne.deleteUSer(userTwo);
console.log(users)

console.log(AdminOne)