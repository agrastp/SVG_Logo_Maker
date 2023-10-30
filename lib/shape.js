class Shape {
    constructor({logoShape, logoColor, textColor, logoName}){
        this.logoShape = logoShape;
        this.logoColor = logoColor,
        this.textColor = textColor,
        this.logoName = logoName;
    }
    generateShape(){
        console.log(`It is ${this.logoShape}`)
    }
}







// function generateShape (data){
//     if (data === "triangle"){
//         const generateTriangle = new Triangle(data)
//         return generateTriangle;
//     } else if (data === "circle"){
//         const generateCircle = new Circle(data)
//         return generateCircle;
//     } else if (data === "square"){
//         const generateSquare = new Square(data)
//         return generateSquare;
//     }
//     }




module.exports = Shape