const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  test('should render a circle with given color', () => {
    const shape = new Circle('blue');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });
});

describe('Triangle', () => {
  test('should render a triangle with given color', () => {
    const shape = new Triangle('blue');
    expect(shape.render()).toEqual('<polygon points="150,10 250,190 50,190" fill="blue" />');
  });
});

describe('Square', () => {
  test('should render a square with given color', () => {
    const shape = new Square('blue');
    expect(shape.render()).toEqual('<rect x="70" y="30" width="160" height="160" fill="blue" />');
  });
});
