const ul = document.querySelector('ul');
// ul.remove();


const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log('You clicked me');
})

button.addEventListener('click', () => {
    // ul.innerHTML += '<li> Something new </li>';
    const li = document.createElement('li');
    li.textContent = 'Something new to do'
    // ul.append(li)
    ul.prepend(li);
})

const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', event => {
//         console.log('item clicked');
//         console.log(event);
//         console.log(event.target);
//         event.stopPropagation();           ->> to stop the bubbling effect
//         event.target.style.textDecoration = 'line-through';
//     })


// })

// items.forEach(item => {
//     item.addEventListener('dblclick', event => {
//         event.target.remove();
//         event.stopPropagation();
//     })
// })

//Event Bubbling
//Event Delegation
ul.addEventListener('click', event => {
    // console.log('Event in Ul');
    // console.log(event.target)

    if(event.target.tagName === 'LI'){
        event.target.remove();
    }
    
})