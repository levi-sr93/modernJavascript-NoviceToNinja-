//Regular Function 
const calcArea = function(radius){
    return 3.14 * radius**2;
}


//ARROW FUNCTION
const calcAreaArrow = (radius) => {
    return 3.14 * radius**2;
} 


//Shorter ARROW FUNCTION
const calcAreaArrowShort = radius => 3.14 * radius**2;

const area = calcArea(5);
console.log('Area is: ', area);

const areaArrow = calcAreaArrow(5);
console.log('Area from Arrow is: ', areaArrow);

const areaArrowShort = calcAreaArrowShort(5);
console.log('Area from Arrow shorter is: ', areaArrowShort);

//EXERCISES FOR ARROW FUNCTION

// const greet = function(){
//     return 'Hello, there!';
// }

const greet = () => 'Hello, there!';

console.log(greet())

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total +=products[i] + products[i] * tax;
//     }
//     return total;
// }

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }

    return total;
}

console.log(bill([10], 0.2));