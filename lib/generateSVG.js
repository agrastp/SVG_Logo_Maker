
const generateSVG = (data) => {
    return ` <svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    ${data.generateShape()}
     <text x="${data.logoShape != "triangle" ? "150" : "50"}" y="${data.logoShape != "triangle" ? "150" : "80"}"
     font-size="${data.logoShape != "triangle" ? "60" : "20"}" text-anchor= "middle" 
     fill="${data.textColor}">${data.logoName}</text></svg>`
;
};

module.exports = generateSVG




    