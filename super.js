// In Short, created by extends, and accessed by Super keyword
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

 class Tony extends Person{

    constructor()
    {
        super('Tony');
    }

    meet()
    {
        return `Hi !!!, nice to meet you !!!`;
    }

    greet()
    {
        //Super here is accesing the greet() method on parent class Person
        let greeting = super.greet();
        return `${greeting}. I am appened on top of Parent greet() method...!!!`
    }

 }

//let name = new Tony('Tony');

//Adding super in the child class uses the constructor from parent class, if there is no constructor, empty one is created by JS engine

let name = new Tony();
console.log(name.greet());
console.log(name.meet());

let name2 = new Person('Luna');

console.log(name2.greet());


// In Short, created by extends, and accessed by Super keyword