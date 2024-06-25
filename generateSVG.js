const { Circle, Triangle, Square } = require('../lib/shapes');

function generateSVG({ text, textColor, shape, shapeColor }) {
  let shapeElement;
  switch (shape) {
    case 'circle':
      shapeElement = new Circle(shapeColor).render();
      break;
    case 'triangle':
      shapeElement = new Triangle(shapeColor).render();
      break;
    case 'square':
      shapeElement = new Square(shapeColor).render();
      break;
    default:
      shapeElement = '';
  }

  return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeElement}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
  `;
}

module.exports = generateSVG;
