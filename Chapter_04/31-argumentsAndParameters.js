//arguments and Parameters

const speak = function(name = 'Luigi', time = 'Night'){
    console.log(`Good ${time} ${name}`);
};

speak();
speak('Mario', 'Morning');
speak('Ryu');
speak();

console.log('====== Returning VAlues=====');

//returning Values

const calcArea = function(radius){
    return 3.14 * radius**2;
    
}

const area = calcArea(5);
console.log(area)

const calcVol = function(area){
    return 'Calculating...'
};

const result = calcVol(area)
console.log(result)