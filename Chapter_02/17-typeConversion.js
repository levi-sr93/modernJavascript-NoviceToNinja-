//type conversion
let score = '100';

console.log(score + 1);
console.log(typeof score);

score = Number(score);
console.log(score + 1);

console.log(typeof score);

let result = Number('Hello');
console.log(result);

let result2 = String(50);
console.log(result2);
console.log(typeof result2);
console.log(result2 + 2);

let result3 = Boolean(100);
console.log(result3, typeof(result3));

let result4 = Boolean('0');
console.log(result4, typeof(result4));

