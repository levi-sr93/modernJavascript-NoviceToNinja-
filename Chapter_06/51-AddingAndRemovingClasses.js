const content = document.querySelector('p');

console.log(content.classList)

content.classList.add('error');
content.classList.remove('error');
content.classList.add('success');

const paras = document.querySelectorAll('p');


paras.forEach(each => {
    if(each.textContent.includes('success')){
        each.classList.add('success');
    } else if(each.textContent.includes('error')){
        each.classList.add('error');
    }
})

const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');