// // functions

function sum(Input) {
    let sum = 0

    if (arguments.length > 0) {
        for (argument of arguments) {
            if (typeof argument === 'number') {
                sum += argument
            } else {
                return `${argument} is not a number`
            }
        }
        return sum

    } else {
       return'Error! Atleast 2 arguments expected'
    }
}
console.log(sum(2,3))
console.log(sum(2))
console.log(sum())
console.log(sum(2,3,4))
console.log(sum(4,'Shikuku'))