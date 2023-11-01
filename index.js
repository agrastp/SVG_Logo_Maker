const inquirer = require('inquirer');
const generateSVG = require("./lib/generateSVG");
const fs = require('fs');
const userShape = require('./lib/generateShape');

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
        console.log(data);
        console.log(userShape);

        userShape.generateShape(); // when I console it is undefined
        fs.writeFile('newLogo.svg', generateSVG(userShape), (err) =>
            err ? console.log(err) : console.log('sucessfully created newLogo.svg')
        );
    })
    .catch((err) => console.error(err));


