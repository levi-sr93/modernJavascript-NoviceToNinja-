//primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//REFERENCE VALUES

const userOnee = { name: 'Ryu', age: 30};
const userTwoo = userOnee;

console.log(userOnee, userTwoo);

userOnee.age = 40;

console.log(userOnee, userTwoo);

userTwoo.name = 'Chun-li';
console.log(userOnee, userTwoo);