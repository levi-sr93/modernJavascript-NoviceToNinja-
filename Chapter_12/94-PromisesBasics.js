const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState);

            if (request.readyState === 4 && request.status === 200) {
                // console.log(request, request.responseText);
                const data = JSON.parse(request.responseText)
                resolve(data)
            } else if (request.readyState === 4) {
                // console.log('Could not fetch the data')
                reject('Error getting resource')
            }
        })

        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.open('Get', resource);

        request.send()
    })
};

getTodos('./todos/luigi.json')
    .then(data => {
        console.log('Promise 1 Resolved', data);
        return getTodos('./todos/mario.json')
    }).then(data => {
        console.log('Promise 2 resolved', data)
        return getTodos('./todos/shaun.json')
    }).then(data => {
        console.log('Promise 3 resolved', data)
    })
    .catch((err) => {
        console.log('Promise Rejected', err)
    })


console.log(1);
console.log(2);

// //callbacks
// getTodos('./todos/luigi.json', (error, data) => {
//     console.log(data);
//     getTodos('./todos/mario.json', (error, data) => {
//         console.log(data);
//         getTodos('./todos/shaun.json', (error, data) => {
//             console.log(data);
//         })
//     })

// });



//Promise example
const getSomething = () => {
    return new Promise((resolve, reject) => {
        //fetch some data
        resolve('some data');
        // reject('Some error');
    })
};


//Com dois argumentos dentro do .then() fica um pouco confuso
// getSomething().then(data => {
//     console.log(data)
// }, (err) => {
//     console.log(err)
// })

//utilizando .then() em caso de resolve e .catch() em caso de reject!
// getSomething().then( data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })

console.log(3);
console.log(4);