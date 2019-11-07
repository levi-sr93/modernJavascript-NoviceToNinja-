const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback')

const usernamePattern = /^[a-zA-Z]{6,12}$/;


form.addEventListener('submit', e => {
    e.preventDefault();
    
    //validation
    const username = form.username.value;

    if(usernamePattern.test(username)){
        feedback.textContent = 'That username is valid';
    }else{
        feedback.textContent = 'Username can contain letters only and between 6 and 12 characters';
    }

})

//live Feedback

form.username.addEventListener('keyup', event => {
    // console.log(event.target.value);

    if(usernamePattern.test(event.target.value)){
        // console.log('Passed');
        form.username.setAttribute('class', 'success');
    }else{
        // console.log('failed');
        form.username.setAttribute('class', 'error');
        
    }
})