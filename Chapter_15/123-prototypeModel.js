//constructor functions

function User(username, email) {
    this.username = username;
    this.email = email;

    this.login = function () {
        console.log(`${this.username} has logged in`);
    };
}

User.prototype.longin = function () {
    console.log(`${this.username} has logged in`);
    return this;
}

User.prototype.logout = function () {
    console.log(`${this.username} has logged out`);
    return this;
}

function Admin(username, email, title) {
    User.call(this, username, email)
    this.title = title
}

Admin.prototype = Object.create(User.prototype)

Admin.prototype.deleteUser = function () {
    
}

const userOne = new User('Mario', 'mario@nitendo.com');
const userTwo = new User('Luigi', 'luigi@nitendo.com');
const userThree = new Admin('Yoshi', 'Yoshi@nitendo.com', 'Black belt');

console.log(userOne, userTwo, userThree);
userOne.login();