/* Write a function celsiusToFahrenheight that converts temperature from celsius to fahrenheit.
 E.g celsiusToFahrenheight(10) => 50 degrees fahrenheight */

 function celsiusToFahrenheight(degreesInC) {
    return `${degreesInC * 1.8 + 32} degrees fahrenheight.` 
 }

console.log(celsiusToFahrenheight(10))
console.log(celsiusToFahrenheight(17)) 
console.log(celsiusToFahrenheight(34))