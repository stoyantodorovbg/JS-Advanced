/**
 * Created by Stoyan on 14.7.2017 г..
 */
function createComputerHierarchy() {

    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = Number(responseTime);
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = Number(expectedLife);
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw  new TypeError('Abstract class cannot be instantiated directly');
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = Number(processorSpeed);
            this.ram = Number(ram);
            this.hardDiskSpace = Number(hardDiskSpace);
        }
    }

    class Laptop extends  Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = Number(weight);
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            if (value instanceof Battery) {
                this._battery = value;
            } else {
                throw new TypeError("it's not a battery!")
            }
        }
    }

    class Desktop extends Computer {

        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }
        get keyboard() {
            return this._keyboard;
        }

        set keyboard(_keyboard) {
            if (_keyboard instanceof Keyboard) {
                this._keyboard = _keyboard;
            } else {
                throw new TypeError("it's not a keyboard!")
            }

        }

        get monitor() {
            return this._monitor;
        }

        set monitor(_monitor) {
            if (_monitor instanceof Monitor) {
                this._monitor = _monitor;
            } else {
                throw new TypeError("it's not a monitor!")
            }
        }

    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

let createClass = createComputerHierarchy();
////let battery = 100;
////let laptop = new createClass.Laptop('Dell', '5000', 2, 1000, 1100, 'green', battery);
////console.log(laptop);

console.log('---------------');

let battery1 = new createClass.Battery('IDM', 200);
let laptop1 = new createClass.Laptop('Dell', '5000', 2, 1000, 1100, 101, 'red', battery1);
console.log(laptop1);

//let attemptToInstanceAbstract = new createClass.Computer('Dell', '5000', 2, 1000);
//console.log(attemptToInstanceAbstract);

//let laptop2 = new createClass.Laptop("Hewlett Packard",2.4,4,0.5,3.12,"Silver","pesho");
//console.log(laptop2);


