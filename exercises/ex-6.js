//first 20 prime numbers

for(let number = 1, count = 0; count < 20; number++){
    let factors = 0
    for(let divisor = 1 ; divisor <= number; divisor++) {
        if(number % divisor === 0) {
            factors++
        }
    }
    
    if (factors === 2) {
        count++
        console.log(number)
    }
}
