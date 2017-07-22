/**
 * Created by Stoyan on 14.7.2017 г..
 */
class Console {

    static get placeholder() {
        return /{\d+}/g;
    }

    static writeLine() {
        let message = arguments[0];
        if (arguments.length === 1) {
            if (typeof (message) === 'object') {
                message = JSON.stringify(message);
                return message;
            }
            else if (typeof(message) === 'string') {
                return message;
            }
        }
        else {
            if (typeof (message) !== 'string') {
                throw new TypeError("No string format given!");
            }
            else {
                let placeholders = message.match(this.placeholder).sort(function (a, b) {
                    a = Number(a.substring(1, a.length - 1));
                    b = Number(b.substring(1, b.length - 1));
                    return a - b;
                });
                if (placeholders.length !== (arguments.length - 1)) {
                    throw new RangeError("Incorrect amount of parameters given!");
                }
                else {
                    for (let i = 0; i < placeholders.length; i++) {
                        let number = Number(placeholders[i].substring(1, placeholders[i].length - 1));
                        if (number !== i) {
                            throw new RangeError("Incorrect placeholders given!");
                        }
                        else {
                            message = message.replace(placeholders[i], arguments[i + 1])
                        }
                    }
                    return message;
                }
            }
        }
    }
}

let expect = require('chai').expect;

describe("Testing Console", function () {
    it("Test without arguments", function () {
        expect(Console.writeLine()).to.be.equal("TypeError: No string format given!", "The static function writeLine must return a TypeError");
    });
    it("Test with a string", function () {
        expect(Console.writeLine("simple string")).to.be.equal("simple string", "The static function writeLine must return 'simple string'");
    });
    it("Test with un undefined", function () {
        expect(Console.writeLine(undefned)).to.be.equal("ReferenceError: undefned is not defined", "The static function writeLine must return a ReferenceError");
    });
    it("Test with a NaN", function () {
        expect(Console.writeLine(NaN)).to.be.equal("[undefned]", "The static function writeLine must return un undefined");
    });
    it("Test with un array", function () {
        expect(Console.writeLine([])).to.be.equal("[]", "The static function writeLine must return 'simple string'");
    });
    it("Test with un object", function () {
        expect(Console.writeLine({name: 'name', age: 30})).to.be.equal(JSON.stringify({name: 'name', age: 30}), "The static function writeLine must return a JSON representation of object.");
    });
    describe("Test with placeholders", function () {
        it("Test without string", function () {
            expect(Console.writeLine(1, 0, 1, 2)).to.be.equal("TypeError: No string format given!", "The static function writeLine must return a typeError");
        });
        it("Test a number", function () {
            expect(Console.writeLine(1)).to.be.equal("[undefined]", "The static function writeLine must return undefined");
        });
        it("Test without string", function () {
            expect(Console.writeLine({}, 0, 1, 2)).to.be.equal("TypeError: No string format given!", "The static function writeLine must return a typeError");
        });
        it("Test without string", function () {
            expect(Console.writeLine([], 0, 1, 2)).to.be.equal("TypeError: No string format given!", "The static function writeLine must return a typeError");
        });
        it("Test with not much count of the parameters", function () {
            expect(Console.writeLine("some {0} string {1}and many parameters", 5, 1, 10)).to.be.equal("RangeError: Incorrect amount of parameters given!", "The static function writeLine must return a RangeError");
        });
        it("Test without parameters", function () {
            expect(Console.writeLine("some string and many parameters", 5, 1, 10)).to.be.equal("RangeError: Cannot read property 'sort' of null", "The static function writeLine must return a TypeError");
        });
        it("Test with not much count of the parameters", function () {
            expect(Console.writeLine("some {0} string {1}and {2}many parameters", 5, 1)).to.be.equal("RangeError: Incorrect amount of parameters given!", "The static function writeLine must return a RangeError");
        });
        it("Test with correct placeholders and parameters", function () {
            expect(Console.writeLine("some {0} string {1}and many parameters", 5, 1)).to.be.equal("some 5 string 1and many parameters", "The static function writeLine must return a string");
        });
        it("Test with not much indexes of the placeholders", function () {
            expect(Console.writeLine("some {5} string {1}and many parameters", 5, 1)).to.be.equal("RangeError: Incorrect placeholders given!", "The static function writeLine must return a RangeError");
        });
    });

});




