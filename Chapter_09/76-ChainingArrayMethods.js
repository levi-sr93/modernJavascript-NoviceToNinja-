const products = [
    { name: 'gold star', price: 30 },
    { name: 'green shell', price: 10 },
    { name: 'red shell', price: 40 },
    { name: 'banana skin', price: 5 },
    { name: 'mushroom', price: 30 }
];

// const filteredArray = products.filter(product => product.price > 20);

// const promos = filteredArray.map(product => `The ${product.name} is $ ${product.price / 2} dollars`);

const promos = products
    .filter(product => product.price > 20)
    .map(product => `The ${product.name} is $${product.price / 2}`)

console.log(promos)