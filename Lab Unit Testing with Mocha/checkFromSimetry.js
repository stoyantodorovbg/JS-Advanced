/**
 * Created by Stoyan on 7.7.2017 г..
 */
function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

let expect = require('chai').expect;

describe("isSymmetric - return equal", function () {
    it("should return equal')|", function() {
        expect(isSymmetric([1, 2, 1])).to.be.equal(true);
    });
    it("should return false", function () {
        expect(isSymmetric([1, 2, 3, 1])).to.be.equal(false);
    });
    it("should return true", function () {
        expect(isSymmetric([1])).to.be.equal(true);
    });
    it("should return NaN", function () {
        expect(isSymmetric("some name")).to.be.equal(false);
    });
    it("should return true", function () {
        expect(isSymmetric([])).to.be.equal(true);
    });
    it("should return true", function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.equal(true);
    });
    it("should return false", function () {
        expect(isSymmetric([5,'chao',{a:5},new Date(),{a:5},'hi',5])).to.be.equal(false);
    });
});