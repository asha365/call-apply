// class Person{
//     constructor(firstName, lastName, salary){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.salary = salary;
//     }
// }

// const heroPerson = new Person('Hero', 'Alom', 20000);
// console.log(heroPerson);
// const friendlyPerson = new Person('Hero', 'salman', 26000);
// console.log(friendlyPerson);

//After ES6 using class
function Person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new Person1('Asha', 'Afrin', 50000);
console.log(oldPerson);