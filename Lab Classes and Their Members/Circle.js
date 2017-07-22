/**
 * Created by Stoyan on 11.7.2017 г..
 */
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.diameter = this.radius * 2;
    }
    set diameter (diameter) {
        this.radius = diameter / 2;
    }
    get area() {
        return this.radius * this.radius * Math.PI;
    }
}


let a = new Circle();
a.diameter = 4;
console.log(a.radius);

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
