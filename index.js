const inquirer = require('inquirer');
const { generateShape } = require('./lib/shape.js');
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
    const finalLogo = generateShape(data);

    fs.writeFile('newLogo.svg', generateSVG(finalLogo), (err) =>
        err ? console.log(err) : console.log('sucessfully created newLogo.svg')
    );
})
    .catch((err) => console.error(err));


    generateSVG = (shape) => {
        if (shape === "triangle") {
            return
            `<svg id="triangle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="300" viewBox="0 0 100 100">
               ${shape.render()}
                <text x="50" y="80" font-size="40" text-anchor="middle" fill=${shape.textColor}>${shape.logoName}</text>
                 </svg>`
        } else if (shape === "square") {
            return
            `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                ${shape.render()}
                 <text x="150" y="150" font-size="60" text-anchor="middle" fill=${shape.textColor}>${shape.logoName}</text></svg>`
        } else (shape === "circle") 
            return 
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill=${shape.textColor}>${shape.logoName}</text>
          </svg>`
        }
    
    

