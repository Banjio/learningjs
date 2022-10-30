type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(n1: Combinable , n2: Combinable, resultConversion: ConversionDescriptor): Combinable{
    let result;
    if(typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number'){
        result = +n1 + +n2;
    } else {
        result = n1.toString() + n2.toString();
    }
    return result;
    // if(resultConversion === 'as-number'){
    //     // The plus operator used like this parses the text to an integer
    //     return +result;
    // } else {
    //     return result.toString();
    // }
    
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStrAges = combine('30', '26', 'as-number');
console.log(combinedStrAges);

const combinedNames = combine('Max', 'Chrisi', 'as-text');
console.log(combinedNames);
