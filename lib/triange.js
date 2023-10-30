const Shape = require("./shape.js");

class Triangle extends Shape{
    constructor(data){
        super(data)
    }
    generateShape(){
        return `<polygon points="50 15, 100 100, 0 100" fill="${this.logoColor}"/>`
    }
}

module.exports = Triangle;