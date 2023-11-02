//Triangle Test checks for shape and color

const Triangle = require('../lib/triangle');

test('should render the correct shape and color', () => {
    var triangle = new Triangle({
        logoShape: 'triangle',
        logoColor: 'purple'});
        expect(triangle.generateShape()).toEqual(`<polygon points="50 15, 100 100, 0 100" fill="${triangle.logoColor}"/>`);
    });
