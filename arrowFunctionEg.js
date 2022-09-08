let greet = function(firstname, lastname)
{
    return `Hi ${firstname} ${lastname}`;
}

let greet2 = (firstname, lastname) => {
    return `Hi ${firstname} ${lastname}`;
}

console.log(greet2('Tony','Alicia'));


// We can also write a arrow function like the following without causing error
() => {return 1};

//However we can't do much with it, but we can invoke it by calling at the end like this

(() => {return 1}) ();

// Can test with log
console.log((() => {return 1}) ());

///////////////////////////////////////////////////////////////////////
// Another eg;
function logThis(fn)
{
    console.log(fn(1,2));
}

logThis(() => {
    let a = 1;
    return a;
})

//The below function passes two values for the function logThis(fn), which contains fn(1,2) underneath, and thus should return 3 for the expression below

logThis((a,b) => {

    return a+b;

});

