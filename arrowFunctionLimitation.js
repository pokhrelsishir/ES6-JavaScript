let me = {
    first: 'Tony',

    greet: function()
    {
        console.log(this.first);     // This will return the value Tony

        console.log(this);        //Comment no 1
    },

    greet2: () => {
        console.log(this.first);      // This will return undefined
    
        console.log(this);           // Comment no2
    }

}


me.greet();
me.greet2();


// Comment no.1 and comment no.2 will have different results
// Beacause the arrow function execution will not have a new this ojbect created everytime, it actually refenreces to the global execution context



// Another example

class Person{
    constructor(fname){
        this.first = fname;
        this.greet = () => {
            console.log(this.first);             // Here because we used arrow function, the this keyword here is same as the this keyword in line 33
        }
    }
}

let me2 = new Person('Jack');

me2.greet();

// Creating a arrow or just any function inside of constructor will result in creating greet function being created on every instance of the object creation,
// while if the greet method was outside of consturctor inside of the class Person, only one prototype of greet method would be created inside of Person class 
// Creating function inside constructor will result in waste of memory 