/**
 * Created by Stoyan on 13.7.2017 г..
 */
function fromJudje() {
    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new Error('Cannot create un instance of the abstract class "Abstract"');

            }
        }
    }

    class Circle extends Figure {

        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return `${this.constructor.name} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {

        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.height
        }

        toString() {
            return `${this.constructor.name} - width: ${this.width}, height: ${this.height}`
        }
    }

    return {
        Circle: Circle,
        Rectangle: Rectangle
    }
}

let createClass = fromJudje();
let circle = new createClass.Circle(10);
let rectangle = new createClass.Rectangle(3, 4);

console.log(circle.toString());
console.log(rectangle.toString());
console.log(rectangle.area);
console.log(circle.area);