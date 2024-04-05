class Person{
    constructor(name){
        this.name = name;
    }
    sayHello(){
        console.log(`My name is ${this.name} ${this.age}`)
    }
}


// inheritance

class Student extends Person{
    constructor(name,age){
        super(name)
        this.age = age;
    }

    eligiblity(){
        console.log(`${this.name} age is a ${this.age}`,this.age >18 ? 'Eligible ' : 'Not Eligible')
    }
}

const student = new Student('Ram',12)
student.sayHello()
student.eligiblity()