/*
write a for loop to print odd numbers between 50and 80 in revese order

write a for loop to print multiples of seven between 1 and 50

write a for loop to print the first 20 prime numbers
*/

/*for loop to print odd numbers between 50and 80 in revese order

for(let number = 80; number >= 50; number-- ) {
     if(number % 2 === 1){
         console.log(number) 
     }
}
*/

/*for loop to print multiples of seven between 1 and 50

for(let number = 1; number <= 50; number++ ) {
    if(number % 7 === 0){
        console.log(number) 
    }
}
*/

//write a for loop to print the first 20 prime numbers

// write all prime numbers
// const number = 7
// let prime = true;




    // loop from 2 to number-1
    // for (let i = 2; i < number; i++) {
    //     if (number % i === 0) {
    //         prime = false;
    //         break;
    //     }
    // }

    // if (prime) {
    //     console.log(`${number} is a prime number`);
    // } else {
    //     console.log(`${number} is a not prime number`);
    // }

    // for(let number = 1; number > 0; number++ ) {
    //     if(number % 7 === 0){
    //         console.log(number) 
    //     }
    // }

let number = 2
let factors = 0   
 
for(let divisor = 1 ; divisor <= number; divisor++) {
    if(number % divisor === 0) {
        factors++
    }
}

if (factors === 2) {
    console.log(`${number} is a prime number`)
} else{
    console.log(`${number} is a not prime number`)
}