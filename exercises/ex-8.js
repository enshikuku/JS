/*

create an array to hold your top choices (colors)
for each choice logto the screen  A  string like
my #1 choice is

Bonus: Change it to log "My 1st choice", "My 2nd choice"
picking the right suffix for the number based on what it is 

*/
const PFA = ['Mo Salah', 'Kevin De Bruyne', 'Ronaldo', 'Virgil Van Djik', 'David De Gea', 'Mason Mount', 'Phill Foden', 'Harry Kane' , 'Son', 'Vardy']


for (let index = 0; index < PFA.length; index++) {
    let suffix 
    if (index === 0) {
        suffix = 'st'
    } else if (index === 1) {
        suffix = 'nd'    
    } else if (index === 2) {
        suffix = 'rd'    
    } else {
        suffix = 'th'    
    }
    console.log(`My ${index + 1}${suffix} choice is ${PFA[index]}`)    
}