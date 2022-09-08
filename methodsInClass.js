class Person
{
    firstName;

    constructor(name)
    {
        this.firstName = name;
    }

    greet()
    {
        return `Hello, ${this.firstName}`;
    }

}

let name = new Person('Tony');

console.log(name.greet());

let name2 = new Person('Luna');

console.log(name2.greet());