// Having const and let to define variables
var uName = 'Max';
var age = 30;
// This will not work becaus const cannot be reassigned
//uName = "Seb"
// function add(a: number, b: number){
//     let result;
//     result = a + b;
//     return result;
// }
// if(age > 20){
//     let isOld = true
// }
// console.log(isOld)
var add = function (a, b) {
    return a + b;
};
// If you only have one expression you can even rewrite this function shorter
//const add = (a: number, b: number) => a + b;
var printOutput = function (output) { return console.log(output); };
printOutput(add(5, 2));
