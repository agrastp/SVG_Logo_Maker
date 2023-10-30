class Shape {
    constructor({logoShape, logoColor, textColor, logoName}){
        this.logoShape = logoShape;
        this.logoColor = logoColor,
        this.textColor = textColor,
        this.logoName = logoName;
    }
}

class Triangle extends Shape{
    constructor(data){
        super(data)
    }
    render(){
        return `<polygon points="50 15, 100 100, 0 100" fill="${this.logoColor}"/>`
    }
}

class Circle extends Shape{
    constructor(data){
        super(data)
    }
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.logoColor}" />`
    }
}

class Square extends Shape{
    constructor(data){
        super(data)
    }
    render(){
        return `<rect width="300" height="300" fill= "${this.logoColor}" />`
    }
}

const generateShape = (data) => {
    const shape = data.shape;
    

    }

}

module.export = generateShape;