/*Create a function isPrime that returns true or false if a number is prime. E.g isPrime(9) => false, isPrime(11) => true*/
function isPrime(number) {
    let factors = 0   
    for(let divisor = 1 ; divisor <= number; divisor++) {
    if(number % divisor === 0) {
            factors++
        }
    }
    return factors === 2     
}
console.log(isPrime(0))
console.log(isPrime(2))
console.log(isPrime(1))
console.log(isPrime(-3))