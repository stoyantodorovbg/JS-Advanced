/**
 * Created by Stoyan on 11.7.2017 г..
 */
class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea() {
        return this.width * this.height;
    }
}

let rect = new Rectangle(5, 6, 'blue');

console.log(rect.width);
console.log(rect.color);
console.log(rect.calcArea());