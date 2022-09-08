let expression = x => y => z => z ? y : x;

// The following arrow function can be re-written as the following

let expression2 = function(x)
{
    return function(y)
    {
        return function(z)
        {
            z ? y : x;
        }
    }
}


let result = expression('Tony')('Alicia')(true);
//This means x is Tony, y is Alicia, z is true
// So, if z is true then return y else return x
// So, since z is true, returns Alicia



let result2 = expression('Tony')('Alicia')(false);

let result3 = expression2('Tony')('Alicia')(true);