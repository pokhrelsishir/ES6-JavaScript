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

    
    static type = 'Human';

    static greeting()
    {
        return 'Good Morning...!!!'
    }

}

 
let name = new Person();

console.log(name.greet());

// The static properties and methods are accessed directly by calling ClassName.propertyName/MethodName and not by objectName.propertyName/MethodName. Eg:

console.log(Person.type);          //If we use console.log(name.type); will give an error as same is for the console.log(name.greeting());
console.log(Person.greeting());


