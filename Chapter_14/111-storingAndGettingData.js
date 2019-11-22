//store data in local storage
localStorage.setItem('name', 'mario');
localStorage.setItem('age', 50);

//get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);


//updating data
localStorage.setItem('name', 'Luigi');
age = localStorage.age = 30;

name = localStorage.getItem('name')
age = localStorage.getItem('age')

console.log(name, age)

//deleting data from localStorage
// localStorage.removeItem('name');            -> Remove apenas um item passando no método
// name = localStorage.getItem('name');
// console.log(name)

localStorage.clear()                         // Limpa todo o localStorage
name = localStorage.getItem('name')
age = localStorage.getItem('age')

console.log(name, age);