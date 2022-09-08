class Person
{


}


let s = class {

}

function logClass(p)
{
    console.log(p);

}

logClass(s);

logClass(class{

});

//if we see what p is, its class{}, but if we see typeof(p), it is 'function'
// thus there is no true class in JavaScript, just a syntatic sugar for function with one difference
// as JavaScript sees it as class, and not function, JS will add "isClassConstructor = true" object as a class constructor
// This object is added by JS under the hood, and we cannot chnage it
// This will allow JS engine to make different choices for classes which it wouldnot allow otherwise
