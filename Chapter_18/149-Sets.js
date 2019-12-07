const namesArray = ['Ryu', 'Chun-li', 'Ryu', 'Shaun'];
console.log(namesArray); 

// const namesSet = new Set(['Ryu', 'Chun-li', 'Ryu', 'Shaun']);
// console.log(namesSet);

// const uniqueNames = [...namesSet];

const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

const ages = new Set();
ages.add(20);
ages.add(25).add(30);


ages.delete(25)
console.log(ages, ages.size);

console.log(ages.has(30), ages.has(25))

ages.clear();
console.log(ages)

const ninjas = new Set([
    {name:'Shaun', age: 30},
    {name:'Crystal', age: 30},
    {name:'Chun-li', age: 35}

]);

console.log(ninjas)

ninjas.forEach(ninja => {
    console.log(ninja.name, ninja.age)
})