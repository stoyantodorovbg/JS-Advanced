/**
 * Created by Stoyan on 20.7.2017 г..
 */
let list = (function(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
})();

let expect = require('chai').expect;


describe("Test function", function () {
    let test;
    beforeEach(() => {
        test = list;

    });

    describe("Test from properties", function () {
        it("Has add", function () {
            expect(test.add).to.exist;
        });
        it("Has delete", function () {
            expect(test.delete).to.exist;
        });
        it("Has toString", function () {
            expect(test.toString).to.exist;
        });
    });
    describe("Test add property", function () {
        it("Test with string empty", function () {
            test.add('');
            expect(test.toString()).to.be.equal('', "It should return string empty.")
        });
        it("Test with string", function () {
            test.add('hi');
            expect(test.toString()).to.be.equal(', hi', "It should change.")
        });
        it("Test with number", function () {
            test.add(8);
            expect(test.toString()).to.be.equal(', hi, 8', "It should change.")
        });
    });
    describe("Test delete function", function () {
        it("Test with not integer index", function () {
            test.delete('3', function () {
                expect(test.toString()).to.be.equal(', hi, 8', "It shouldn't change.")
            })
        });
        it("Test with undefined", function () {
            test.delete(undefined, function () {
                expect(test.toString()).to.be.equal(', hi, 8', "It shouldn't change.")
            })
        });
        it("Test with NaN", function () {
            test.delete(NaN, function () {
                expect(test.toString()).to.be.equal(', hi, 8', "It shouldn't change.")
            })
        });
        it("Test with negative index", function () {
            test.delete(-1, function () {
                expect(test.toString()).to.be.equal(', hi, 8', "It shouldn't change.")
            })
        });
        it("Test with too big index", function () {
            test.delete(100, function () {
                expect(test.toString()).to.be.equal(', hi, 8', "It shouldn't change.")
            })
        });
        it("Test with corect index", function () {
            test.delete(0, function () {
                expect(test.toString()).to.be.equal('hi, 8', "It shouldn't change.")
            })
        });
    });
});