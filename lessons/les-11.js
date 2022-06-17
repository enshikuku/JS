// array - holds or stores multiple values

const fruits = ['mangoes', 'bananas', 'apples', 'oranges', 'pineapple']

console.log(fruits)

// accessing array values
console.log(fruits[0])          // mangoes
console.log(fruits[3])
// length property returns number of elements within array
console.log(fruits.length)

// push() - appends an element at the end of the array
fruits.push('papaya')

console.log(fruits)
console.log(fruits.length)
// pushing more than one element
fruits.push('grapes', 'guava')

console.log(fruits)
console.log(fruits.length)

// pop() - removes the last element at the end

fruits.pop()
console.log(fruits.length)

const NaN = []
console.log(NaN)
