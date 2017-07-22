/**
 * Created by Stoyan on 9.7.2017 г..
 */
let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

let expect = require('chai').expect;

describe("Test mathEnforcer", function () {
    it("The parameter is not a number", function () {
        expect(mathEnforcer.addFive('five')).to.be.equal(undefined);
    });
    it("The parameter is not a number", function () {
        expect(mathEnforcer.subtractTen('ten')).to.be.equal(undefined);
    });
    it("The parameters are not a number", function () {
        expect(mathEnforcer.sum('ten', 'five')).to.be.equal(undefined);
    });
    it("One of the parameters is not a number", function () {
        expect(mathEnforcer.sum(7, 'five')).to.be.equal(undefined);
    });
    it("One of the parameters are not a number", function () {
        expect(mathEnforcer.sum('ten', 7)).to.be.equal(undefined);
    });

    it("The result must be equal of 15", function () {
        expect(mathEnforcer.addFive(10.000000001)).to.be.closeTo(15, 3);
    });
    it("The result must be equal of -5", function () {
        expect(mathEnforcer.addFive(-10.000000001)).to.be.closeTo(-5, 3);
    });
    it("The result must be equal of 15", function () {
        expect(mathEnforcer.addFive(10)).to.be.equal(15)
    });
    it("The result must be equal of 5", function () {
        expect(mathEnforcer.addFive(0)).to.be.equal(5)
    });
    it("The result must be equal of 15", function () {
        expect(mathEnforcer.addFive(10.1)).to.be.equal(15.1)
    });
    it("The result must be equal of -5.1", function () {
        expect(mathEnforcer.addFive(-10.1)).to.be.equal(-5.1)
    });
    it("The result must be equal of 15", function () {
        expect(mathEnforcer.subtractTen(25)).to.be.equal(15);
    });
    it("The result must be equal of -10", function () {
        expect(mathEnforcer.subtractTen(0)).to.be.equal(-10);
    });
    it("The result must be equal of 15", function () {
        expect(mathEnforcer.subtractTen(25.1)).to.be.equal(15.1);
    });
    it("The result must be equal of -10.1", function () {
        expect(mathEnforcer.subtractTen(-25.1)).to.be.equal(-10.1);
    });
    it("The result must be equal of 15", function () {
        expect(mathEnforcer.subtractTen(25.0000000001)).to.be.closeTo(15, 3);
    });
    it("The result must be equal of -10", function () {
        expect(mathEnforcer.subtractTen(-25.0000000001)).to.be.closeTo(-10, 3);
    });
    it("The result must be equal of 15", function () {
        expect(mathEnforcer.sum(5, 10)).to.be.equal(15);
    });
    it("The result must be equal of 15", function () {
        expect(mathEnforcer.sum(5.000000001, 10.00000000001)).to.be.closeTo(15, 3);
    });
    it("The result must be equal of -15", function () {
        expect(mathEnforcer.sum(-5, -10)).to.be.equal(-15);
    });
    it("The result must be equal of 15", function () {
        expect(mathEnforcer.sum(5.1, 10.1)).to.be.equal(15.2);
    });
    it("The result must be equal of -5", function () {
        expect(mathEnforcer.sum(5, -10)).to.be.equal(-5);
    });
    it("The result must be equal of 0", function () {
        expect(mathEnforcer.sum(0, 0)).to.be.equal(0);
    });
});