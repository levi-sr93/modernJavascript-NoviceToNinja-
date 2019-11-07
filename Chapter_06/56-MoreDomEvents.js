const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
    console.log('OI! my content is copyright!');
})

const box = document.querySelector('.box');
const content = document.querySelector('div.content');

box.addEventListener('mousemove', e => {
    // console.log(e)
    // console.log(e.offsetX, e.offsetY);

    // box.textContent = `x pos - ${e.offsetX}   Y pos - ${e.offsetY}`

    content.textContent = `x: ${e.offsetX} Y: ${e.offsetY}` 
})

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
})