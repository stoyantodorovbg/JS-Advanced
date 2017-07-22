/**
 * Created by Stoyan on 19.7.2017 г..
 */
class SortedList {
    constructor() {
        this.list = [];
    }

    add(element) {
        this.list.push(element);
        this.sort();
    }

    remove(index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }

    get(index) {
        this.vrfyRange(index);
        return this.list[index];
    }

    vrfyRange(index) {
        if (this.list.length == 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }

    sort() {
        this.list.sort((a, b) => a - b);
    }

    get size() {
        return this.list.length;
    }
}

let expect = require('chai').expect;

describe("Test SortedList", function () {
    let test;
    beforeEach(() => {
        test = new SortedList();
    });

    describe("Test it has properties", function () {
        it("Test has it a function add", function () {
            expect(test.add).to.exist;
        });
        it("Test has it a function remove", function () {
            expect(test.remove).to.exist;
        });
        it("Test has it a function get", function () {
            expect(test.get).to.exist;
        });
        it("Test has it a function vrfyRange", function () {
            expect(test.vrfyRange).to.exist;
        });
        it("Test has it a function sort", function () {
            expect(test.sort).to.exist;
        });
        it("Test has it a property size", function () {
            expect(test.size).to.exist;
        });
        it("Test has it a property list", function () {
            expect(test.list).to.exist;
        });
        it("should have size property getter", function() {
            expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true, "Property size was not found.");
        });
        it("should have size property getter", function() {
            expect(typeof test.size).to.not.equal('function', "Property size should not be a function.");
        });
        it("should have all of the functions in it's prototype", function() {
            expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true, "Function add() was not found.");
            expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true, "Function remove() was not found.");
            expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true, "Function get() was not found.");
        });
    });
    describe("Test the function add", function () {
        it("Test with a valid parameter", function () {
            test.add(4);
            expect(test.get(0)).to.equal(4, "Should return 4.");
        });
        it("Test with two valid parameters", function () {
            test.add(4);
            test.add(3);
            expect(test.get(1)).to.equal(4, "Should return 4.");
        });
    });
    describe("Test the function remove", function () {
        it("Remove un element", function () {
            test.add(4);
            test.add(3);
            test.remove(0);
            expect(test.get(0)).to.equal(4, "Should return 4.");
        });
        it("Remove un element of empty collection", function () {
            expect(() => test.remove(0)).to.equal(Error, "Collection is empty.");
        });
        it("Remove incorrect index", function () {
            test.add(4);
            test.add(3);
            test.remove(2);
            expect(() => test.remove(3)).to.equal(Error, "Index was outside the bounds of the collection.");
        });
        it("Remove incorrect index", function () {
            test.add(4);
            test.add(3);
            test.remove(2);
            expect(() => test.remove(-1)).to.throw(Error, "Index was outside the bounds of the collection.");
        });
    });
    describe("Test get function", function () {
        it("Get un element of empty collection", function () {
            expect(test.get(0)).to.throw(Error, "Collection is empty.");
        });
        it("Get incorrect index", function () {
            test.add(4);
            test.add(3);
            test.remove(2);
            expect(test.get(3)).to.throw(Error, "Index was outside the bounds of the collection.");
        });
        it("Get incorrect index", function () {
            test.add(4);
            test.add(3);
            test.remove(2);
            expect(() => test.get(-1)).to.throw(Error, "Index was outside the bounds of the collection.");
        });
        it("Get correct index", function () {
            test.add(4);
            test.add(3);
            test.add(3);
            test.remove(3);
            expect(test.get(1)).to.equal(4, "Should return 4.");
        });
    });
    describe("Test size property", function () {
        it("Get size", function () {
        test.add(4);
        test.add(3);
        expect(test.size).to.equal(2, "Should return 2.");
        });
        it("Get size", function () {
            test.add(4);
            test.add(3);
            test.remove(0);
            expect(test.size).to.equal(1, "Should return 2.");
        });
        it("Get size", function () {
            test.add(4);
            test.add(3);
            expect(test.size).to.equal(2, "Should return 2.");
            test.add(4);
            test.add(3);
            expect(test.size).to.equal(4, "Should return 2.");
            test.add(4);
            test.add(3);
            test.remove(0);
            expect(test.size).to.equal(5, "Should return 2.");
        });
        it("Test with two valid parameters", function () {
            test.add(4);
            test.add(3);
            expect(test.get(0)).to.equal(3, "Should return 4.");
            expect(test.get(1)).to.equal(4, "Should return 4.");
        });
        it("Test with two valid parameters", function () {
            test.add(4);
            test.add(3);
            test.add(5);
            test.remove(1);
            expect(test.get(0)).to.equal(3, "Should return 4.");
            expect(test.get(1)).to.equal(5, "Should return 4.");
        });
    });
});