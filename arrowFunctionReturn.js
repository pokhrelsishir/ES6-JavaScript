let add = function(a,b)
{
    return a+b;
}

//This can be written as the below removinf function keyword

let add2 = (a,b) => 
{
    return a+b;
}

// This can be again written as the below removing the return key word 
let add3 = (a,b) => a+b;

// But a point that needs to be noted is that if return is removed from an statement, parentheiss should be also removed or else we will get an error


// This means a function takes parameters a and b and then return the value
// Value after arrow is being returned


// Another example

let sqr = (x) => x*x;

// We can even remove the brackets as we have only a single parameter in arrow function

let sqr2 = x => x*x;    // This is actually close to mathematics function eg: f:x => x^2



/////////////////////////////////////////////////////////

let greet2 = (firstname) => {
    return `Hi ${firstname} `;
}

console.log(greet2('Tony'));


// The above function can be replaced by the following arrow function


let greet = firstname => `Hi ${firstname}`;

console.log(greet('Alicia'));

