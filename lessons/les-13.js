// arrow functions

// function info(name) {
//     return `this function was called. \n ${name} was passed as an argument`   
// }
const info = (name, gender) => {
    return `this function was called. \n${name} was passed as an argument a well as ${gender}`
}

console.log(info('coding', 'male'))