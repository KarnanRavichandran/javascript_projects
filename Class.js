class Person{
    constructor(name){
        this.name = name;
    }
    sayHello(){
        console.log(`My name is ${this.name}`)
    }
}
const person = new Person('karnan')
person.sayHello()