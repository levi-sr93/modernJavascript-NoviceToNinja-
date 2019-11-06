//object literals

// const blogs = [
//     { title: 'Why mac and Chees Rules', likes: 30},
//     { title: 'Ten things to make with marmite', likes: 50}
// ]

// console.log(blogs)

let user = {
    name: 'Crystal',
    age: 30,
    email: 'crystal@thenetninja.com',
    location: 'Berlin',

    //store object in array
    blogs: [
        { title: 'Why mac and Chees Rules', likes: 30 },
        { title: 'Ten things to make with marmite', likes: 50 }
    ],

    //methods
    login: function () {
        console.log('The user logged in')
    },

    logout: function () {
        console.log('The user logged out');
    },

    //we can better define methods and still the same as the above example
    logBlogs() {
        console.log('Log do this e do blogs', this, this.blogs)
        this.blogs.forEach(blog => console.log(blog.title, blog.likes));
    }

};

console.log(user);
console.log(user.name);

user.age = 31;
console.log(user.age);

console.log(user['name']);
console.log(user['email']);

user['name'] = 'Chun-li';
console.log(user['name']);

//other usage

let key = 'location';
console.log(user[key]);

//typeof object

console.log(typeof (user));

//calling the method
user.login();
user.logout();

console.log(this)
user.logBlogs();