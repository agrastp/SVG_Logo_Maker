const inquirer = require('inquirer');
const Shape = require('./lib/shape');
const generateSVG = require("./lib/generateSVG")
const fs = require('fs');

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
        }
    ])




    .then((data) => {
        console.log(data)

        const shapeType = new Shape(data);
        shapeType.generateShape(data); // when I console it is undefined

        fs.writeFile('newLogo.svg', generateSVG(shapeType), (err) =>
            err ? console.log(err) : console.log('sucessfully created newLogo.svg')
        );
    })
    .catch((err) => console.error(err));


