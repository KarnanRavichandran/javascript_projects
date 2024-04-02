
// This is the most common and simplest way to create an object. Object literals are enclosed in curly braces {} and consist of a set of key-value pairs. Here is an example:
// const person = {
//     name: "John",
//     age: 30,
//     job: "Developer"
// };
// console.log(person.age);
// console.log(person.job);

// The object constructor is a built-in function in JavaScript, which is used to create an object prototype. Here is an example:
// const person1 = new Object();
// person1.name = "John";
// person1.age = 30;
// person1.job = "Developer";
// console.log(person1);

// Using the Object.create() method:

const personProto = {
    sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
        }
    };
    const person = Object.create(personProto);
    person.name = "John";
    person.age = 30;
    person.job = "Developer";
    console.log(person);
    console.log(person.sayHello());


