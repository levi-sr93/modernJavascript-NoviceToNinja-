//Selecting the first p tag and changing its content
const para = document.querySelector('p');
console.log(para.innerText)
para.innerText = ' Ninjas are awesome';
console.log(para.innerText)

//Selecting all P tags -> return a nodeList

const paras = document.querySelectorAll('p')
console.log(paras)
//running in each one and adding the text 
paras.forEach( para => para.innerText += ' Yeeh')

//Changing the html

const content = document.querySelector('.content')

console.log(content.innerHTML)

content.innerHTML += '<h2> This is a new H2 </h2>'


const people = ['Mario', 'Luigi', 'Yoshi'];

people.forEach(p => {
    content.innerHTML += `<p>${p}</p>`
})