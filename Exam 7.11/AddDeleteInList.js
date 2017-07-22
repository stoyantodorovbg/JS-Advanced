/**
 * Created by Stoyan on 18.7.2017 г..
 */
let func = (function(){
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
    let renew;
    beforeEach(() => {
        renew = func

    });

    describe("Test from properties", function () {
        it("Has add", function () {
            expect(renew.add).to.exist;
        });
        it("Has delete", function () {
            expect(renew.delete).to.exist;
        });
        it("Has toString", function () {
            expect(renew.toString).to.exist;
        });
    });
    describe("Test add property", function () {
        it("Test with string empty", function () {
            renew.add('');
            expect(renew.toString()).to.be.equal('', "It should return string empty.")
        });
        it("Test with string", function () {
            renew.add('hi');
            expect(renew.toString()).to.be.equal('hi', "It should change.")
        });
        it("Test with number", function () {
            renew.add(8);
            expect(renew.toString()).to.be.equal('8', "It should change.")
        });
    });
    describe("Test delete function", function () {
        it("Test with not integer index", function () {
            renew.delete('3', function () {
                expect(renew.toString()).to.be.equal(', hi, 8', "It shouldn't change.")
            })
        });
        it("Test with undefined", function () {
            renew.delete(undefined, function () {
                renew.add(8);
                expect(renew.toString()).to.be.equal('8', "It shouldn't change.")
            })
        });
        it("Test with NaN", function () {
            renew.add(8);
            renew.delete(NaN, function () {
                expect(renew.toString()).to.be.equal('8', "It shouldn't change.")
            })
        });
        it("Test with negative index", function () {
            renew.add(8);
            renew.delete(-1, function () {
                expect(renew.toString()).to.be.equal('8', "It shouldn't change.")
            })
        });
        it("Test with too big index", function () {
            renew.add(8);
            renew.delete(100, function () {
                expect(renew.toString()).to.be.equal('8', "It shouldn't change.")
            })
        });
        it("Test with corect index", function () {
            renew.add(8);
            renew.delete(0, function () {
                expect(renew.toString()).to.be.equal('', "It should change.")
            })
        });
    });
});