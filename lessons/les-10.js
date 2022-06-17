// iterations (loops)

/*

    1. while loop
    2. do while
    3. for loop
    4. for of loop (used on iterable objects)

*/

//let number = 1

// while(number <= 10){
//     console.log(number)
//     number++
// }


// do{
//     console.log(number)
//     number++
// }while(number <= 10)

// for(let number = 1; number <= 10; number++) {
//     console.log(number)
// }

// console.log('END')

const colors = ['black', 'red', 'orange','blue', 'purple', 'pink', 'indigo']

// for(let index = 0; index < colors.length; index++) {
//     console.log(colors[index])
// }

// for(let color of colors){
//     console.log(color)
// }

let name = 'Shikuku'
// for(let index = 0; index < name.length; index++) {
//     console.log(name[index])
// }

for(let character of name){
    console.log(character)
}
