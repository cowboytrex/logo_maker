const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./utils/generateSVG');

console.log('generateSVG:', generateSVG); // Add this line to debug

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    validate: (input) => input.length <= 3 || 'Text must be 3 characters or less.',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (keyword or hexadecimal):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hexadecimal):',
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data.trim(), (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('Generated logo.svg');
  });
}

function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log('Responses:', responses); // Add this line to debug
    const svgContent = generateSVG(responses);
    console.log('Generated SVG Content:', svgContent); // Add this line to debug
    writeToFile('logo.svg', svgContent);
  });
}

init();
