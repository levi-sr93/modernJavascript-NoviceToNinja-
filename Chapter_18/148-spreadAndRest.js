//rest parameters
const double = (...nums) => {
    console.log(nums)
    return nums.map(num => num*2);
}

const result = double(1, 2, 3, 7, 9, 9);
console.log(result)

//spread syntax (Arrays)
const people = ['Ryu', 'Mario', 'Crystal']
console.log(...people);
const members = ['Mario', 'Shun-li', ...people]
console.log(members)

//spread syntax( objects )
const person = {name: 'Ken', age: 30, job: 'Fighter'}
const personClone = {...person}
console.log(personClone)