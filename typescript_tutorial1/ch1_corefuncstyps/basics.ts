// Core data types

function add(n1: number, n2: number, showResult: boolean, phrase: string = 'Result is: ') {
    // Javascript way of ensuring that no wrong type is used in function --> THIS IS NOT NECCESARY IN TYPESCRIPT
    /*if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect input, dummy!')
    }*/
    let result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    return result;
}


// Here we do not need to specify the variable (also we could the same way as in the function) because ts has a builtin feature 
// called type inference where ts "guesses the type of the variable", only in the case with an unassigned variable like:
// let numb1: number;
// numb1 = '5' // this will throw an error
const numb1 = 5;
const numb2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is the amazing: '

const res = add(numb1, numb2, printResult, resultPhrase);

//console.log(`My number is ${res}`);

// I do not know if this is still recommended -> The official ts documentation recommends interfaces  for this purpose
// The author of the video however recommends also not to use this syntax and let ts interfere the types
/*const person: {
    name: string;
    age: number;
} = { */

enum Role { ADMIN, READ_ONLY, AUTHOR };
// You can also assign strings or numbers to the Enums
//enum Role {ADMIN = 100, READ_ONLY = 'RO', AUTHOR = 300};

interface Person{
    name: string;
    age: number;
    hobbies: string[];
    //role: [number, string] // this is a tuple type
    role: Role
}

const person: Person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

// If we do not set the tuple type we can do stuff like this to role which is obviously dangerous for production code
// We can do this because ts inferes the type array with union type string | number (spoken string or number)
// This however is still allowed in tuples: Question how can we avoid this?
//person.role.push('admin')
// If we specify it as tuple we can catch this error
//person.role[1] = 10

let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Hunting Paper Ducks'];

console.log(person.role);

// The following loops are equivalent
// Using in gives the index of gives the value
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

person.hobbies.forEach(element => console.log(element))
