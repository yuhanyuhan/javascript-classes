class Rectangle {
    constructor(breath, length) {
        this.breath = breath;
        this.length = length;
    }

    area() {
        return this.breath * this.length;
    }

    perimeter() {
        return this.breath*2 + this.length*2 
    }
};

var first = new Rectangle(2, 4);
var second = new Rectangle(5, 10);

console.log(first.area())
console.log(second.area()); 

console.log(first.perimeter())
console.log(second.perimeter())