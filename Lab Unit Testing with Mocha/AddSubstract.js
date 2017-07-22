/**
 * Created by Stoyan on 7.7.2017 г..
 */
function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

let expect = require('chai').expect;

describe("createCalculator()", function () {
    let calc;

    beforeEach(function () {
        calc = createCalculator();
    });
    it("Should return 10 after add 5 and add 5", function () {
        calc.add(5);
        calc.add(5);
        expect(calc.get()).to.be.equal(10);
    });
    it("Should return 10 after add 5 and add 5", function () {
        calc.add(5);
        calc.add(5);
        expect(calc.get()).to.be.equal(10);
    });
    it("Should return 15 after add 15, add 5, and subtract 5", function () {
        calc.add(15);
        calc.add(5);
        calc.subtract(5);
        expect(calc.get()).to.be.equal(15);
    });
    it("Should return 10 after add 5 and add 5", function () {
        calc.add(5.5);
        calc.add(5);
        expect(calc.get()).to.be.equal(10.5);
    });
    it("Should return 10 after add 5 and add 5", function () {
        calc.add("5");
        calc.add(5);
        expect(calc.get()).to.be.equal(10);
    });
    it("Should return 10 after add 5 and add 5", function () {
        calc.subtract("10");
        calc.add(5);
        expect(calc.get()).to.be.equal(-5);
    });
});