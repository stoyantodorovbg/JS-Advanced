/**
 * Created by Stoyan on 9.7.2017 г..
 */
function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

let expect = require('chai').expect;

describe("Test lookupChar()", function () {
    it("Expect string as first parameter", function () {
        expect(lookupChar([], 7)).to.be.equal(undefined);
    });
    it("Expect Number as second parameter", function () {
        expect(lookupChar('someText', '3')).to.be.equal(undefined);
    });
    it("Expect Number as second parameter", function () {
        expect(lookupChar('someText', {arr: [], char: 'a'})).to.be.equal(undefined);
    });
    it("Expect string and number", function () {
        expect(lookupChar({}, {arr: [], char: 'a'})).to.be.equal(undefined);
    });
    it("Expect second parameter to be in the borders of the string.length", function () {
        expect(lookupChar('someText', 100)).to.be.equal("Incorrect index");
    });
    it("Expect no floating-point number", function () {
        expect(lookupChar('someText', 1.1)).to.be.equal(undefined);
    });
    it("Expect second parameter to be in the borders of the string.length", function () {
        expect(lookupChar('someText', 8)).to.be.equal("Incorrect index");
    });
    it("Expect second parameter to be in the borders of the string.length", function () {
        expect(lookupChar('someText', -100)).to.be.equal("Incorrect index");
    });
    it("Expect m", function () {
        expect(lookupChar('someText', 2)).to.be.equal("m");
    })
});