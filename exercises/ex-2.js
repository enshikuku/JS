// write an if statement to emulate the traffic light system

let color = 'Red'

if(color === 'green' || color === 'GREEN' || color === 'Green') {
    console.log('GO')
} else if(color === 'red' || color === 'RED' || color === 'Red'){
    console.log('STOP')
} else if(color === 'YELLOW' || color === 'Yellow' || color === 'yellow'){
    console.log('GET READY')
} else{
    console.log('ERROR! Invalid input')
}
