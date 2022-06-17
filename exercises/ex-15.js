/* Write a program to play the rock-paper-scissors game. 
There will only be 2 players: you will play against a computer. 
You make a choice and the computer will randomly choose either ‘rock’ or ‘paper’ or ‘scissor’. 
After which a winner will be announced based on the choices. */


const playRPS1 = yourChoice => {
    let userChoice = yourChoice.toLowerCase()
    const options = ['paper', 'rock', 'scissors']
    computerChoice = options[Math.floor(Math.random() * 3)]
    if (userChoice === 'rock' && computerChoice === 'rock' || userChoice === 'paper' && computerChoice === 'paper' || userChoice === 'scissors' && computerChoice === 'scissors') {
    return`You picked ${userChoice} and the computer picked ${computerChoice}. IT IS A DRAW`
    } else if (userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'scissors' && computerChoice === 'paper' || userChoice === 'rock' && computerChoice === 'scissors') {
    return`You picked ${userChoice} and the computer picked ${computerChoice}. CONGRATULATIONS! YOU WIN`
    } else if (userChoice === 'paper' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'rock' || userChoice === 'rock' && computerChoice === 'paper') {
    return`You picked ${userChoice} and the computer picked ${computerChoice}. SORRY. YOU LOSE`
    } else {
    return`Error! Invalid input! You picked ${userChoice}. You have to pick any of these three items: ${options}`
    }
}



const playRPS = choice => {
    const choices = ['rock', 'paper', 'scissors']
    let player, computer
    if (choices.includes(choice.toLowerCase())) {
        player = choice.toLowerCase()
        computer = choices[Math.floor(Math.random() * 3)]
        
        if (player === 'rock' && computer === 'paper') {
            return `Player : ${choice} <:> Computer : ${computer} \n Computer WINS!`
        } else if (player === 'rock' && computer === 'scissors') {
            return `Player : ${choice} <:> Computer : ${computer} \n player WINS!`
        } else if (player === 'scissors' && computer === 'paper') {
            return `Player : ${choice} <:> Computer : ${computer} \n player WINS!`
        } else if (player === 'scissors' && computer === 'rock') {
            return `Player : ${choice} <:> Computer : ${computer} \n computer WINS!`
        } else if (player === 'paper' && computer === 'rock') {
            return `Player : ${choice} <:> Computer : ${computer} \n player WINS!`
        } else if (player === 'paper' && computer === 'scissors') {
            return `Player : ${choice} <:> Computer : ${computer} \n computer WINS!`
        } else {
            return `Player : ${choice} <:> Computer : ${computer} \n DRAW!`
        }
    } else {
        return `${choice} is not a valid choice for the game.`
    }
}

console.log(playRPS('Rock'))
console.log(playRPS('Rock'))
console.log(playRPS('Rock'))
console.log(playRPS('Rock'))
console.log(playRPS('Rock'))
console.log(playRPS('PAPER'))
console.log(playRPS('PAPER'))
console.log(playRPS('PAPER'))
console.log(playRPS('PAPER'))
console.log(playRPS('PAPER'))
console.log(playRPS('scissors'))
console.log(playRPS('scissors'))
console.log(playRPS('scissors'))
console.log(playRPS('scissors'))
console.log(playRPS('scissors'))
console.log(playRPS1('Rock'))
console.log(playRPS1('Rock'))
console.log(playRPS1('Rock'))
console.log(playRPS1('Rock'))
console.log(playRPS1('Rock'))
console.log(playRPS1('PAPER'))
console.log(playRPS1('PAPER'))
console.log(playRPS1('PAPER'))
console.log(playRPS1('PAPER'))
console.log(playRPS1('PAPER'))
console.log(playRPS1('scissors'))
console.log(playRPS1('scissors'))
console.log(playRPS1('scissors'))
console.log(playRPS1('scissors'))
console.log(playRPS1('scissors'))