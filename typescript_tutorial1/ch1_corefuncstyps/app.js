function combine(n1, n2, resultConversion) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number') {
        result = +n1 + +n2;
    }
    else {
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
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStrAges = combine('30', '26', 'as-number');
console.log(combinedStrAges);
var combinedNames = combine('Max', 'Chrisi', 'as-text');
console.log(combinedNames);
