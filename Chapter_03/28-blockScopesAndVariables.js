//Variables & block scope

let age = 30;



if(true){
    let age = 40;
    let name = 'Levi'
    console.log('Inside first code block', age, name);

    if(true) {
        let age = 50;
        console.log('Inside second code block:', age);
    }
}

console.log('Outside code block', age, name);

console.log('----------Using Const--------');

const aged = 30;



if(true){
    const aged = 40;
    const name = 'Levi'
    console.log('Inside first code block', aged, name);

    if(true) {
        const aged = 50;
        console.log('Inside second code block:', aged);
        var test = 'Hello';
    }
}

console.log('Outside code block', aged, name, test);