// objects
const person = {
    name: 'Shikuku',
    gender: 'male',
    hasVotted: false,
    idNumber: 39399534,
    info: function() {
        if (this.hasVotted) {
            return `My name is ${this.name} and I have not voted.`
        } else {
            return `My name is ${this.name} and I have voted.`
        }
    },
    info2: () => {
        if (this.hasVotted) {
            return `My name is ${this.name} and I have not voted.`
        } else {
            return `My name is ${this.name} and I have voted.`
        }
    }, 
}
//accessing values in an object
// 1. Bracket Notation
console.log(person['name']) 
// 2. Dot notation
console.log(person.hasVotted)
// call the info( methods are functions associated with an object)
console.log(person.info())
console.log(person.info2()) // this keyword has no binding on arrow functions : gives undefined
