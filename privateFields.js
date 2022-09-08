class Person
{
    #firstName;        // Using # at the front of the variable name makes ir private variable in JS 
    #lastName

    constructor(fname, lname)
    {
        this.#firstName = fname;               // Once private variables are used, they need to be referenced in the same way everywhere else
        this.#lastName = lname;
    }

    get fname()
    {
        return this.#firstName;
    }

    set fname(fn)
    {
        return this.#firstName = fn;
    }

    greet()
    {
        return `Hello, ${this.#firstName}`;
    }
   
}

let name = new Person('Tony', 'Alicea');


console.log(name.greet());               //This will work as greet() method has access to private attribute #firstName inside that method

console.log(name.#firstName);            // While the bottom two colsole logs will fail as they won't be able to access the private field firstName and lastName outside of a Class or Person class in our case
console.log(name.#lastName);



