//CALLBACK and FOREACH

const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

// myFunc(function(value){
//     console.log(value);
// })

myFunc( value => {
    console.log(value)
})

let people1 = ['Mario', 'Luigi', 'Ryu', 'Shaun', 'Chun-Li'];

const logPerson = (person, index) => {
    console.log(`${index}- Hello ${person}`);
};

people1.forEach(logPerson);

//Get a reference to the 'Ul'

const ul = document.querySelector('.people');

const people = ['Mario', 'Luigi', 'Ryu', 'Shaun', 'Chun-li'];

let html = ``;

people.forEach( person => {
    //Create html template for each one
    html += `<li style="color:purple">${person}</li>`;
})

console.log(html)

ul.innerHTML = html;