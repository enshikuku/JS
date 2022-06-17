//divisibility for 3 and 5


let number = 2

if( number % 3 === 0 && number % 5 === 0){
    console.log(`${number} is divisible by 3 and 5`)
} else if( number % 3 === 0 && number % 5 !== 0 ){
    console.log(`${number} is divisible by 3`)
} else if( number % 3 !== 0 && number % 5 === 0 ){
    console.log(`${number} is divisible by 5`)
} else {
    console.log(`${number} is neither divisible by 3 and 5`)
} 