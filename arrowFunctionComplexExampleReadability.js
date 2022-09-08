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

let result2 = expression('Tony')('Alicia')(false);

let result3 = expression2('Tony')('Alicia')(true);