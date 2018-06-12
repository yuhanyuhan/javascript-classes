class SimpleCalculor {
    constructor (value) {
        this.value = value
    }
    add(n) {
        this.value = n + this.value
        return this
    }
    subtract(n) {
        this.value = this.value - n 
        return this    
    }
    multiply(n) {
        this.value = n * this.value
        return this    
    }
    divide(n) {
        this.value = this.value / n 
        return this    
    }
}

var num = new SimpleCalculor(0)

// console.log(num.add(12))
// console.log(num.subtract(0))
// console.log(num.multiply(2))
// console.log(num.divide(2))


console.log(num.add(12).multiply(2).divide(2))