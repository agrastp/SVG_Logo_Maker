//Square Test checks for shape and color

const Square = require('../lib/square');

test('should render the correct shape and color', () => {
    var square = new Square({
        logoShape: 'square',
        logoColor: 'red'});
        expect(square.generateShape()).toEqual(`<rect width="300" height="300" fill= "${square.logoColor}"/>`);
    });
