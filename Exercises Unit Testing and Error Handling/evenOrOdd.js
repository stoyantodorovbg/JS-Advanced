/**
 * Created by Stoyan on 9.7.2017 г..
 */
function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

let expect = require('chai').expect;

describe ("Test length of string", function () {
    it("Should return undefined", function () {
        expect(isOddOrEven([])).to.be.equal(undefined);
    });
    it("Should return undefined", function () {
        expect(isOddOrEven({name: 'Pesho Peshew Peshew'})).to.be.equal(undefined);
    });
    it("Should return undefined", function () {
        expect(isOddOrEven(1)).to.be.equal(undefined);
    });
    it("Should return odd", function () {
        expect(isOddOrEven('ama')).to.be.equal("odd")
    });

    it("Should return odd", function () {
        expect(isOddOrEven('mama')).to.be.equal("even")
    })
});