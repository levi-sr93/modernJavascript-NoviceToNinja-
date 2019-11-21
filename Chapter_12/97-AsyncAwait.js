//Fetch API
console.log(1)

const getTodos = async () => {
    const response = await fetch('./todos/luigis.json')

    if(response.status !== 200){
        throw new Error(' Can not fetch the data');
    }

    const data = await response.json();
    // console.log(data)
    return data
}

console.log(2)
console.log(3)

getTodos()
    .then(data => console.log("Resolved: ", data))
    .catch( err => console.log("Rejected: ", err.message))
console.log(4)
console.log(5)

// fetch('./todos/luigi.json')
//     .then((response) => {
//         console.log('Resolved: ', response)
//         return response.json()
//     }).then(data => {
//         console.log(data)
//     }).catch((err) => {
//         console.log('Rejected', err)
//     })  