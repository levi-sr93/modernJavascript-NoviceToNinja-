//Template Strings
const title = 'Best reads of 2009';
const author = 'Mario';
const likes = 30;

//concatenation way 
let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(result)

//template Strings
let secondResult = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(secondResult);

//creating html templates

let html = `
    <h2>${title}</h2>
    <p>By ${author} </p>
    <span> This blog has ${likes} likes </span>
`;

console.log(html)

