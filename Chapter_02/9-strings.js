//strings
console.log('Hello, world');
let email = 'mario@getninja.com';
console.log(email);

//strings concatenations
let firstName = 'Brandon';
let lasName = 'Sanderson'

let fullName = firstName + ' ' + lasName;
console.log(fullName);


//getting  characters
console.log(fullName[0]);
console.log(fullName[2]);

//string length
console.log(fullName.length);


//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result)
console.log(result.toUpperCase())


let index = email.indexOf('g');
console.log(index)

//Commom String Methods

email = 'luigin@getninja.com';

// result = email.lastIndexOf('n');

// result = email.slice(0, 6)

// result = email.substr(6, 10)

// result = email.replace('m', 'w');

result = email.replace('i', 'a');

console.log(result)