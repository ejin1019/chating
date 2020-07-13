// const person = {
//     name: 'eunjin',
//     age: 20
// }

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    greeting() {
        console.log(`My NAME IS ${this.name}, age is ${this.age}`);
    }
    goodbye() {
        console.log(`잘가세요 ${this.name}님`);
    }
}

module.exports = Person