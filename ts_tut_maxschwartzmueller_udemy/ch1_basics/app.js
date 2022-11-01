function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: ".concat(num));
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb();
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
//combineValues = printResult; This will not fail but gives the wrong result at runtime
//combineValues = 5 This will throw an error
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
