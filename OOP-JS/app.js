// Object literals
// const john = {
//     name: 'John',
//     age: 30
// }

// console.log(john);
// console.log(john.name);

// Person constructor
// function Person(name, age, dob) {
//     this.name = name;
//     this.age = age;
//     this.birthday = new Date(dob);
//     this.calculateAge = function() {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() -1970);
//     }
// }

// const brad = new Person('Brad', 25, '12-25-2018');
// const john = new Person('John', 35, '9-12-1985');

// console.log(john.calculateAge());

// String
// const name1 = 'Jeff';
// const name2 = new String('Jeff');
// name2.foo = 'bar';

// // console.log(name1);
// // console.log(name2);

// if(name2 === 'Jeff') {
//     console.log('Yes');
// }else {
//     console.log('NO');
// }

// // Number
// const num1 = 5;
// const num2 = new Number(5);

// console.log(typeof num1);
// // Boolean
// const bool1 = true;
// const bool2 = new Boolean(true);

// console.log(typeof bool2);

// // Function
// const getSum1 = function(x, y) {
//     return x + y;
// }

// const getSum2 = new Function('x', 'y', 'return 1 + 1');

// console.log(getSum2());

// // Object 
// const john1 = {
//     name: 'John'
// };
// const john2 = new Object({
//     name: 'john'
// });

// console.log(john2);


// // Array
// const arr = [1,2,3];
// const arr2 = new Array(1, 2, 3, 4);
// console.log(arr2);

// // Regular expression

// const re1 = /\w+/;
// const re2 = new RegExp('\\w+');
// console.log(re2);

// Prototypes
//Object.prototype
//Person.prototype

// Person constructor
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
// }

// // Calculate age
// Person.prototype.calculateAge = function() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() -1970);
// }

// // Get full name
// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`
// }

// // Gets married
// Person.prototype.getsMarried = function(newLastName) {
//     this.lastName = newLastName;
// }

// const john = new Person('John', 'Doe', '09-25-1985');
// const mary = new Person('Mary', 'Doe', '12-25-1952');

// console.log(john.calculateAge());
// console.log(mary.calculateAge());

// console.log(john.getFullName());

// mary.getsMarried('Smith');

// console.log(mary.getFullName());

// console.log(mary.hasOwnProperty('getFullName'));

// Person constructor
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.greeting = function() {
//     return `Hello ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('John', 'Doe');

// // Customer contructor
// function Customer(firstName, lastName, phone, membership) {
//     Person.call(this, firstName, lastName);
//     this.phone = phone;
//     this.membership = membership;
// }

// // Inherit the Person prototype method
// Customer.prototype = Object.create(Person.prototype);

// // Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// const customer1 = new Customer('Berry', 'Johnson', '555-555-5555', 'standard');
// console.log(customer1);

// Customer.prototype.greeting = function() {
//     return `${this.firstName} welcome to our company.`;
// }
// console.log(customer1.greeting());

// Object.create
// const personPrototypes = {
//     greeting: function() {
//         return `Hello there ${this.firstName} ${this.lastName};`
//     },
//     getsMarried: function(newLastName) {
//         this.lastName = newLastName;
//     }
// }

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Johnson';
// mary.getsMarried('Smith')

// console.log(mary);
// console.log(mary.greeting());

// const brad = Object.create(personPrototypes, {
//     firstName: {value: 'John'},
//     lastName: {value: 'Johnson'},
//     age: {value: 30}
// });

// console.log(brad.greeting());

// ES6 class
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthday = new Date(dob);
//     }

//     greeting() {
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     }

//     calculateAge() {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }

//     getsMarried(newLastName) {
//         this.lastName = newLastName;
//     }

//     static addNumbers(x, y) {
//         return x + y;
//     }
// }

// const mary = new Person('John', 'Johnson', '11-14-1994');
// mary.getsMarried('Berry');
// console.log(Person.addNumbers(1, 2));

// ES6 class inheritence
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }

    static getMemebershipCost() {
        return 500;
    }
}

const john = new Customer('John', 'Johnson', '555-555-5555', 'standard');
console.log(john.greeting());
console.log(Customer.getMemebershipCost());