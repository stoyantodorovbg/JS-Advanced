/**
 * Created by Stoyan on 7.7.2017 г..
 */
function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

let expect = require('chai').expect;

describe("rgbToHexColorRed() - return hexadecimal code of color", function () {
    it("should return #212C37", function() {
        expect(rgbToHexColor(33, 44, 55)).to.be.equal("#212C37");
    });
    it("should return undefined", function() {
        expect(rgbToHexColor(33, 44, "55")).to.be.equal(undefined);
    });
    it("should return undefined", function() {
        expect(rgbToHexColor(33, 44)).to.be.equal(undefined);
    });
    it("should return undefined", function() {
        expect(rgbToHexColor(-1, 44, 55)).to.be.equal(undefined);
    });
    it("should return undefined", function() {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal("#000000");
    });
    it("should return undefined", function() {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal("#FFFFFF");
    });
    it("should return undefined", function() {
        expect(rgbToHexColor(33, {a:2}, 355)).to.be.equal(undefined);
    });
    it("should return undefined", function() {
        expect(rgbToHexColor(33, [22], 355)).to.be.equal(undefined);
    });
    it("should return undefined", function() {
        expect(rgbToHexColor(undefined, 44, 355)).to.be.equal(undefined);
    });
    it("should return undefined", function() {
        expect(rgbToHexColor(44.4, 44, 355)).to.be.equal(undefined);
    });
    it("should return undefined", function() {
        expect(rgbToHexColor(44, 44, 355, 33)).to.be.equal(undefined);
    });
});