"use strict";
class Person {
    constructor(age, n) {
        this.age = age;
        if (n) {
            this.name = n;
        }
        this.age = age;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
let user1;
user1 = new Person(30, 'Max');
console.log(user1);
let add;
add = (n1, n2) => n1 + n2;
//# sourceMappingURL=app.js.map