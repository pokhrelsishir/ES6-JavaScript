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

    #getPersonInfo()           //Similar to private attributes/fields # is used to make methods private as well
    {
        //get a data from server
        return {
            id: 1
        }
    }

    greet()
    {
        return `Hello, ${this.#firstName} : ${this.#getPersonInfo().id}`;   
    }

   
   
}

let name = new Person('Tony', 'Alicea');


console.log(name.greet());        // This will work as the private method #getPersonInfo is inside of the Class Person       


// However following won't work

console.log(name.#getPersonInfo());






