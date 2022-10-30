"use strict";
const uName = 'Max';
let age = 30;
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
const person = {
    name: 'Max',
    age: 30
};
const copiedPerson = Object.assign({}, person);
console.log(copiedPerson);
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
console.log(add(5, 2, 6, 7));
const [hobby1, hobby2, ...remaining] = hobbies;
const personNew = {
    fName: 'Max',
    ageOld: 30,
};
const { fName, ageOld } = personNew;
const { fName: userName, ageOld: ageOld2 } = personNew;
console.log(fName, userName, ageOld, ageOld2);
//# sourceMappingURL=app.js.map