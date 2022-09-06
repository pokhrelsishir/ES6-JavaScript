function greeting(strings, first, last)
{
    console.log(strings);
    console.log(first);
    console.log(last);

    console.log(`${strings[0]}${first}${last} ${strings[1]} ${strings[2]} ${strings[3]}`);

    return `${strings[0]}${first}${last}${strings[1]}${strings[2]}${strings[3]}`;

}



const first = 'Misty';
const last = 'daCat';

const greet = greeting `Hello, ${first}Victoria ${last}. Welcome !!!` 