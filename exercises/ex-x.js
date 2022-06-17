 // write all prime numbers
 let number = 2
 let prime = true;
 // check if number is equal to 1
 if (number === 1) {
     console.log("1 is not a prime number.");
 }
 // check if number is greater than 1
 else if (number > 1) {

     // loop from 2 to number-1
   for (let i = 2; i < number; i++) {
      if (number % i === 0) {
             prime = false
             break
         }
     }

     if (prime) {
         console.log(`${number} is a prime number`);
     } else {
         console.log(`${number} is not a prime number`);
     }
 }

// // check if number is less than 1
// else {
//     console.log(`${number} is a not prime number`);
// }


// let number = 2
// let factors = 0   
 
// for(let divisor = 1 ; divisor <= number; divisor++) {
//     if(number % divisor === 0) {
//         factors++
//     }
// }

// if (factors === 2) {
//     console.log(`${number} is a prime number`)
// } else{
//     console.log(`${number} is a not prime number`)
// }
    