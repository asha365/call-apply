// const realPerson = {
//     firstName: 'Alok',
//     lastName: 'Hasan',
//     getFullName: function(){
//         console.log(this.firstName, this.lastName);
//     }
// }
// console.log(realPerson);
// console.log(realPerson.firstName);
//    }
//}

//Try object
/**const realPerson = {
    firstName: 'Asha',
    lastName: 'Afrin',
    salary: '50000',
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}
realPerson.chargeBill(5000);
console.log(realPerson.salary);*/


const normalPerson = {
    firstName: 'Asha',
    lastName: 'Afrin',
    salary: 50000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}
//realPerson.chargeBill(5000);
//console.log(realPerson.salary);

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Alom',
    salary: 20000
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'salom',
    salary: 20000
}

//bind heroperson
//normalPerson.chargeBill();
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(200);
// heroChargeBill(500);
//console.log(heroPerson.salary);
//console.log(normalPerson.salary);


//bind friendly person
// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(1000);

/*********call********/
// normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
// normalPerson.chargeBill.call(heroPerson, 200, 300, 20);
// console.log(heroPerson.salary);

/*******call friendly person************/
// normalPerson.chargeBill.call(friendlyPerson, 200, 100, 10);
// console.log(friendlyPerson.salary);

/******Apply********/
normalPerson.chargeBill.apply(heroPerson, [300, 100, 30]);
console.log(heroPerson.salary);