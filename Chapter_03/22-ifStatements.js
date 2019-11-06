//if statements
//else if
//logical operators - OR || and AND &&
//logical NOT (!)

const age = 25;

if ( age > 20 ){
    console.log('You are over 20 years old');
}

const ninjas = ['Shaun', 'Ryu', 'Chun-li', 'Yoshi'];

if(ninjas.length > 3){
    console.log("That's a lot of ninjas!");
}

const password = 'passw';

if( password.length >= 12 && password.includes('@') ){
    console.log('That password is mighty strong');
}else if( password.length >= 8 || password.includes('@') && password.length >= 5){
    console.log('That password is strong enough');
} else {
    console.log('Password is not strong enough!');
}

let user = false;

if(!user){
    console.log('You must to be logged in to continue')
}