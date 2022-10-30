// Having const and let to define variables
const uName = 'Max';
let age = 30;
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


// const add = (a: number, b: number = 1) =>{ 
//     return a + b;
// }

// // If you only have one expression you can even rewrite this function shorter
// //const add = (a: number, b: number) => a + b;

// // This is not more precise than the above notation but with eventListeners this can be useful
// const printOutput: (a: number | string) => void = output => console.log(output);

// // For example
// const  button = document.querySelector('button')!;
// if(button){
//     button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(5))

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
// We cann push values to const if they are an array
activeHobbies.push(...hobbies);

const person = {
    name: 'Max',
    age: 30
};

// This creates a copy of person and not just a reference
const copiedPerson = {...person};
console.log(copiedPerson)

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;}, 
        0);
};

console.log(add(5,2,6,7))

// This can be written shorter using array destructuring
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[2];

const [hobby1, hobby2, ...remaining] = hobbies;

const personNew = {
    fName: 'Max',
    ageOld: 30,
};

const {fName, ageOld} = personNew;

// We can also rename a variable with the following syntax
const {fName: userName, ageOld: ageOld2} = personNew;

console.log(fName, userName, ageOld, ageOld2)