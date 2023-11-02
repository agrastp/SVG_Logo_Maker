//Circle class inheriting from the Shape class

const Shape = require("./shape.js");

class Circle extends Shape{
    constructor(data){
        super(data)
    }
   generateShape(){
        return `<circle cx="150" cy="130" r="80" fill="${this.logoColor}" />`
    };
}

module.exports = Circle;