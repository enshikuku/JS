// // functions

function sum(Input) {
    let sum = 0
    const NaN = []
    if (arguments.length > 0) {
        for (argument of arguments) {
            if (typeof argument === 'number') {
                sum += argument
            } else {
                NaN.push(argument)
            }
        }
        if (NaN.length > 0) {
            return ` ERROR! ${NaN} is/are not of number types`
        } else {
            return sum
        }
        
    } else {
       return'Error! Atleast 2 arguments expected'
    }
}
console.log(sum(2,3))
console.log(sum(2))
console.log(sum())
console.log(sum(2,3,4))
console.log(sum(4,'Shikuku', true,'3' ))
console.log(sum('Bree', 'Gordon'))