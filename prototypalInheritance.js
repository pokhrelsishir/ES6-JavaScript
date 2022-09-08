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

    meet()
    {
        return `Hi !!!, nice to meet you !!!`;
    }
 }


let name = new Tony('Tony');

console.log(name.greet());
console.log(name.meet());

let name2 = new Person('Luna');

console.log(name2.greet());



// Extends also works with built in classes or methods. Eg:

class myNumber extends Number{
    
    addOne()
    {
        return this + 1;
    }

}

let num = new myNumber(3.35);

console.log(num.toFixed(1));

console.log(num.addOne());
