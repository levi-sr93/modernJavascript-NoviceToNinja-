//dates & times

const now = new Date();;
console.log(now);
console.log(typeof now);

//Years, Months, days, times
console.log('getFullYear: ', now.getFullYear());
console.log('getMonth: ', now.getMonth());
console.log('getDate: ', now.getDate());
console.log('getDay: ', now.getDay());
console.log('getHours: ', now.getHours());
console.log('getMinutes: ', now.getMinutes());
console.log('getSeconds: ', now.getSeconds());

//timestamps
console.log('timestamp: ', now.getTime());

//date Strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());


//Timestamps and Comparisons
const before = new Date('November 16 2019 7:30:59');
console.log('Now: ', now.getTime(), 'Before: ', before.getTime());

const diff = now.getTime() - before.getTime();
console.log('Difference: ', diff)

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const day = Math.round(mins / 24);

console.log(mins, hours, day);
console.log(`The blog was written in ${day} days`);

//Converting timestamps into date objects
const timestamp = 1675938474990;
console.log(new Date(timestamp));