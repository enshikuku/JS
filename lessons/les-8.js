// conditional branching

/*
    comparison operators
    <   less than
    <=  less than or equal to
    >   greater than
    >=  greater than or equal to
    === equivalent to
    !== not equivaalent to


    logical operators
    &&  logical AND
    ||  logical OR

*/

let age = 19
let gender = 'female'

if(age >= 18 && gender === 'female'){
    console.log('this is a woman')
} else if ( age >= 18 && gender === 'male'){
    console.log('this is a man')
} else if (age < 18 && gender === 'female'){
    console.log('this is a girl')
} else {
    console.log(' this is a boy')
}