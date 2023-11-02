const Square = require('../lib/square');

describe('square', () => {
    it('should render the correct shape and color', () => {
        const square = new Square();
        var color = "red"
        expect(square.generateShape().toEqual(`<rect width="300" height="300" fill= "${color}"`));
    });
});