class Circle {
    constructor(radius) {
        this.radius = radius
    }
    area() {
        return (Math.PI * this.radius**2).toFixed(1) 
    }
    perimeter() {
        return (Math.PI*2*this.radius).toFixed(1)
    }
}


var first = new Circle (1)
var second = new Circle (2)
var third = new Circle (3)

console.log(first.area())
console.log(second.area());
console.log(third.area());
console.log(first.perimeter())
console.log(second.perimeter());
console.log(third.perimeter());