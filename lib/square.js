//Square class, which inherits from the Shape class

const Shape = require("./shape.js");

class Square extends Shape{
    constructor(data){
        super(data)
    }
    generateShape(){
        return `<rect width="300" height="300" fill= "${this.logoColor}"/>`
    }
}

module.exports = Square;