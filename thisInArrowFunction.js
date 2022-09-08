let me = 
{
    first: 'Tony',

    greet: function() 
    {
        console.log(this);
    }
}

me.greet();      //This will give us the object that the method is part of


let me2 = 
{
    first: 'Tony',

    greet: function() 
    {
        console.log(this);
   

    let logMe = function()        // Created a function inside of function and console.logged this to see the result, this this is not directly attached to the object, and is inside of a function which is attached to an object
    {
        console.log(this)         // this will actually return the global object, Windows object in web browser's case
    }
    logMe();
}
}

me2.greet();

// Explanantion : every time a function is invoked, it creates a new execution context which gets the new this keyword
// Since, logMe function is not attached to an object, it's not a method of an object, and ends up pointing to global object
// This can be solved by using self like the below eg, or using an arrow function

let me3 = 
{
    first: 'Tony',

    greet: function() 
    {
        console.log(this);
   
        let self = this;       // use variable self to store the value of self before executing the next nested function inside

    let logMe = function()        
    {
        console.log(self)         
    }
    logMe();
}
}

me3.greet();

// Solving using arrow function

let me4 = 
{
    first: 'Tony',

    greet: function() 
    {
        console.log(this);
   

    let logMe = function()        
    {
        console.log(this)         
    }
    logMe();

},

greet2: function()                        // Added another greet2 function using arrow function to demonstarte the console.log of this keyword 
    {
        console.log(this);
   

    let logMe = () =>        
    {
        console.log(this)         
    }
    logMe();

}

}

me4.greet();
me4.greet2();       // Called the newly added 2nd greet arrow function method

//These two will have differfent results
// Key take away is that, using arrow function, after a function is invoked, it will create a new execution context, but not a this reference
// while normal function after execution will crate a new execution context as well as a this reference



