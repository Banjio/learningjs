// interface Person {
//     name: string;
//     age: number;

//     greet(phrase: string): void;
// }

// let user1: Person;

// user1 = {
//     name: 'Max',
//     age: 30,
//     greet(phrase: string){console.log(phrase + ' ' + this.name)}
// };

// user1.greet("Hello my name is")

interface Named{
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named  {
    greet(phrase: string): void;
}

class Person implements Greetable{
    name?: string;

    constructor(public age: number, n?: string){
        if(n){
            this.name = n
        }
        this.age = age
    }

    greet(this: Person, phrase: string){
        console.log(`${phrase} ${this.name}`)
    }

}

let user1: Greetable;

user1 = new Person(30, 'Max')
console.log(user1)

interface AddFn  {
    (a: number, b:number): number;
}

let add: AddFn;

add = (n1: number, n2: number) =>  n1 + n2;