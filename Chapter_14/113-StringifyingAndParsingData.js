const todos = [
    {text: 'play The last of us 2', author: 'Ellie'},
    {text: 'find treasure', author: 'Drake'},
    {text: 'score a gol', author: 'C.Ronaldo'}
];

// console.log(JSON.stringify(todos));


localStorage.setItem('todos', JSON.stringify(todos))


const storedData = localStorage.getItem('todos');
console.log(JSON.parse(storedData));