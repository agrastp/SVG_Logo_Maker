const Triangle = require("./lib/triangle");
const Circle = require("./lib/circle");
const Square = requre("./lib/square");
const Shape = require("./lib/shape");

let userShape;

    if(data.logoShape === "triangle"){
        userShape === new Triangle();
        console.log('creating triange');
    } else if(data.logoShape === "circle"){
        userShape === new Circle();
        console.log("creating circle");
    } else if(data.logoShape === "square"){
        userShape === new Square();
        console.log("creating square");
    }

    console.log(userShape);
module.exports = userShape;