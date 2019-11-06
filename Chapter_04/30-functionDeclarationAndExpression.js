//Function declaration
function greet(){
    console.log('Hello There!');
}

//function expression
const speak = function(){
    console.log('Good Day!');
};

illBeHoistingtoTheTop();
illBeHoistingtoTheTop();

greet();
greet();

notHoisted();

speak();
speak();

//example of hoisting with function declaration

function illBeHoistingtoTheTop(){
    console.log('I still work');
}

//doen't work with functions expressions
const notHoisted = function(){
    console.log("I'll not be hoisted");
} 