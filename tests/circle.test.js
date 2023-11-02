//Cirlce Test checks for shape and color

const Circle = require('../lib/circle');

test('should render the correct shape and color', () => {
    var circle = new Circle({
        logoShape: 'circle',
        logoColor: 'blue'});
        expect(circle.generateShape()).toEqual(`<circle cx="150" cy="130" r="80" fill="${circle.logoColor}" />`);
    });
