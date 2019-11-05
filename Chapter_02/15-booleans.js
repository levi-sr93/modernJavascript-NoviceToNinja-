//Booleans comparisons
console.log(true, false, 'true', 'false');

//methods can return booleans
let email = 'luigi@thenetninja.com';
let names = ['mario', 'luigi', 'toad'];


let result = email.includes('@');
result = email.includes('!');
console.log(result)

let result2 = names.includes('luigi');
console.log(result2)

//COMPARISON OPERATORS
let age = 25;
console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age != 25);

console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);


let name = 'Levi';
console.log('Name comparison');
console.log(name == 'Levi');
console.log(name == 'levi');
console.log(name > 'Crystal');
console.log(name > 'crystal');
console.log(name > 'levi');