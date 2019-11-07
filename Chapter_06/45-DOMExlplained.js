//Query Selector
const para = document.querySelector('p');
const error = document.querySelector('.error');
console.log(para)
console.log(error)

const divError = document.querySelector('div.error');
console.log(divError);

//Selecting more than one Element 
const paras = document.querySelectorAll('p');

paras.forEach(each => console.log(each));
console.log(paras[2])

const errors = document.querySelectorAll('.error');
console.log(errors)


//Get Element by ID
const title = document.getElementById('page-title');
console.log(title)

//Get Elements base on their class name
const newError = document.getElementsByClassName('error')
console.log(newError);
console.log(newError[1]);

//GET ELEMENTS BY TAG NAME

const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs)