//Import variables and access to inquire/fs library

const inquirer = require('inquirer');
const generateSVG = require("./lib/generateSVG");
const fs = require('fs');
const Triangle = require("./lib/triangle");
const Circle = require("./lib/circle");
const Square = require("./lib/square");
const Shape = require("./lib/shape");

//Prompts the user in the terminal
inquirer
    .prompt([
        {
            type: 'list',
            message: 'What shape would you like your logo to be?',
            name: 'logoShape',
            choices: [
                'triangle',
                'square',
                'circle'
            ]
        },
        {
            type: 'input',
            message: 'Enter a color keyword or color hex code for the shape background color.',
            name: 'logoColor',
        },
        {
            type: 'input',
            message: 'Enter 3 or less letters for the logo text.',
            name: 'logoName',
        },
        {
            type: 'input',
            message: 'Enter a color keyword or color hex code for the text.',
            name: 'textColor'
        },
        {
            type: 'input',
            message: 'What is the title of your logo?',
            name: 'title',
        }
    ])

//Takes data and determines the shape that needs to be rendered.  Passes the data to generate the SVG in the example file.

    .then((data) => {
        console.log(data, "data");
        console.log(data.logoShape);
      
        if(data.logoShape === "triangle"){
            var userShape = new Triangle(data);
            console.log('creating triangle');
        } else if(data.logoShape === "circle"){
            var userShape = new Circle(data);
            console.log("creating circle");
        } else if(data.logoShape === "square"){
            var userShape = new Square(data);
            console.log("creating square");
        }

        userShape.generateShape();
        fs.writeFile(`./examples/${data.title}.svg`, generateSVG(userShape), (err) =>
            err ? console.log(err) : console.log('sucessfully created newLogo.svg')
        );
    })
    .catch((err) => console.error(err));

   
    
    
       
  
