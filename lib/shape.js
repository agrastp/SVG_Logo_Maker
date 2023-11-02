//Shape class (parent to Triangle, Square, Circle)

class Shape {
    constructor ({logoShape, logoColor, textColor, logoName}){
        this.logoShape = logoShape;
        this.logoColor = logoColor;
        this.textColor = textColor;
        this.logoName = logoName;
    }
    generateShape(){
        console.log(`It is ${this.logoShape}`)
    }
}



module.exports = Shape