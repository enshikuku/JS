// Classes - blueprint for creating multiple objects

class Shape {
    
    // special method to give initial values to new instances
    // runs each time an object is created
    constructor(name) {
        this.name = name
        if (arguments.length === 2 && this.name === 'circle') {
            this.radius = arguments[1]
        } else if (arguments.length === 2 && this.name === 'square') {
            this.len = arguments[1]
        } else {
            this.len = arguments[1]
            this.width = arguments[2]
        }
    }
    //creating a class method
    area() {
        if (this.name === 'circle') {
            return Math.PI * this.radius ** 2
        } else if (this.name === 'square') {
            return this.len ** 2            
        } else {
            return this.len * this.width
        }
    }
    peremeter() {
        if (this.name === 'circle') {
            return Math.PI * this.radius * 2
        } else if (this.name === 'square') {
            return this.len * 4            
        } else {
            return 2 * this.len + 2 * this.width
        }
    }
}

const objc1 = new Shape('circle', 1)        
const objc2 = new Shape('rectangle', 4, 8)      
const objc3 = new Shape('square', 7)

console.log(objc1.area())
console.log(objc2.area())
console.log(objc3.area())

console.log(objc1.peremeter())
console.log(objc2.peremeter())
console.log(objc3.peremeter())