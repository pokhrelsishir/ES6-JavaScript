const firstName = "Bob";

{
    const firstName = "Misty";
    console.log(firstName);

    // firstName = Misty ...will cause an error as we are trying to chnage the value of a const variable in same lexical execution environment(block)

}

console.log(firstName);


//However this is legal

const me = {first: 'Monica', last: 'Williams'};

me.first = 'Jessica';

console.log(me);

//This is legal as we are not trying to chnage the value of the const me, instead we are just chnaging the pointer/reference to its first property's location

