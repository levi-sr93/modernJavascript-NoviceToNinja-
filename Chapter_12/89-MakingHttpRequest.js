const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);

        if (request.readyState === 4 && request.status === 200) {
            // console.log(request, request.responseText);
            const data = JSON.parse(request.responseText)
            callback(undefined, data);
        } else if (request.readyState === 4) {
            // console.log('Could not fetch the data')
            callback('Coud not fetch the data', undefined);
        }
    })

    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.open('Get', resource);

    request.send()
};


console.log(1)
console.log(2)

getTodos('./todos/luigi.json', (error, data) => {
    console.log(data);
    getTodos('./todos/mario.json', (error, data) => {
        console.log(data);
        getTodos('./todos/shaun.json', (error, data) => {
            console.log(data);
        })
    })

});

console.log(3)
console.log(4)