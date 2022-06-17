/*Write a function named tollFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
returns your fortune to the screen like so: "You will be a x in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
 */

function tellFortune(numberOfKids, partner, location, job) {
    return `You will be a ${job} in ${location}, and married to ${partner} with ${numberOfKids} kids.`
}

console.log(tellFortune(12, 'Linda', 'Eldoret', 'teacher'))
console.log(tellFortune(3, 'Joy', 'Nakuru', 'Business man'))
console.log(tellFortune(4, 'Lydia', 'Mumbai', 'stock broker'))