/*
    write a forloop that will iterate from 0 to 20
    For each iteration, it will check if the number is even or odd, and report that to the screen (e.g "2 is even", "7 is odd" )
    
    Write a for loop that will iterate from 0 t0 10.
    For each iteration of the for loop, it will multiply the number by 9 and log the results (e.g. "2 * 9 = 18", "9 * 9 = 81")

*/


for(let number = 0; number <= 20; number++) {
    if(number % 2 === 0){
        console.log(`${number} is even`)
    } else {
        console.log(`${number} is odd`)
    }
}

for(let number = 0; number <= 10; number++) {
    console.log(`${number} * 9 = ${number * 9}`)
}
