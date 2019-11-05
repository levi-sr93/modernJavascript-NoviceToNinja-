let ninjas = ['Shaun', 'Ryu', 'Chun-li'];

console.log(ninjas);

console.log(ninjas[1]);

ninjas[1] = 'Ken';
console.log(ninjas);
console.log(ninjas[1]);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

let random = ['Shaun', 'Crystal', 30, 20];
console.log(random)

console.log(ninjas.length)


//ARRAY METHODS

//join
let result = ninjas.join(',')
console.log(result)

//indexof
let result2 = ninjas.indexOf('Chun-li');
console.log(result2)

//concat
let result3 = ninjas.concat(['ken', 'krystal']);
console.log(result3)

//push

let result4 = ninjas.push('Ryu');
console.log(result4)
console.log(ninjas)

//pop
let result5 = ninjas.pop();
console.log(result5);
console.log(ninjas)
