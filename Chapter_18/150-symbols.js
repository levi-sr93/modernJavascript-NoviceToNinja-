const symbolOne = Symbol('a generic name here');
const symbolTwo = Symbol('a generic name here');

console.log(symbolOne, symbolTwo,  typeof symbolOne);
console.log(symbolOne === symbolTwo)

const ninja = {}
ninja.age = 30;
ninja['belt'] = 'Black';
ninja['belt'] = 'Orange';

ninja[symbolOne] = 'Ryu'
ninja[symbolTwo] = 'Shaun'
console.log(ninja)