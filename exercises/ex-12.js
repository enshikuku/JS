/*Create a function lengthOfArray that logs the length of an array.
 E.g lengthOfArray([‘blue’, ‘red’, ‘black’]) => 3
Note: DO NOT USE length property. */

function lengthOfArray(arr) {
    let count = 0
    for (let ele of arr) {
        count++
    }
    return count
}
console.log(lengthOfArray(['red', 'black', 'green', 'yellow']))

const subjects = ['math', 'physics', 'business studies', 'chemistry', 'english']

console.log(lengthOfArray(subjects))