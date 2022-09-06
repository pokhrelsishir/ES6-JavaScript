const first = 'Misty';
const last = 'daCat';

//Use ${} inside the string to result a desired variable/expressions into a string placed on that location
const full = `Hello !!!, ${first} ${last}'s example line`;
// We don't need to worry about escape characters like placing single quotes inside of double quotes or vice versa in string when using BackTick

// We can even use expressions inside of ${}
const fullWithExpresion = `Hello !!!, ${first} ${last} this is your ${0+1+2} visit`;

console.log(full);
console.log(fullWithExpresion);