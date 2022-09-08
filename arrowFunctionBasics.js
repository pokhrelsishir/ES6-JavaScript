// Mathematically f(x) is called f of x 
// Which means f is a function and if we give it a parameter x, we will get the value 

// Eg: f(x) = x^2 means if we give a paramter as 2, it will return square of 2 which is 4 back

// Computer Science uses function in similar way
// f:x --> x^2 means the same thing, just in different way


// Arrows has been used to denote a functions in mathematics from a long time

// Lets start with basic normal function

let add = function(a,b)
{
    return a+b;
}

//Now in arrow function
// we can remove keyword function

// and add arrow to denote a function like in mathematics
// arrow tells the parser what comes before it (the paranthesis and the set of values) is the paramter of the function
// what comes after the arrow is the body of the function

let add2 = (a,b) => {
    return a+b;
}

