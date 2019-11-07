const link = document.querySelector('a');
console.log(link)

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The net Ninja Website';


const message = document.querySelector('p');

console.log(message.getAttribute('class'));

message.setAttribute('class', 'Success');
message.setAttribute('style', 'color:green');