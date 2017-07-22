/**
 * Created by Stoyan on 18.7.2017 г..
 */
function makeList() {
    let data = [];
    return {
        addLeft: function(item) {
            data.unshift(item);
        },
        addRight: function(item) {
            data.push(item);
        },
        clear: function() {
            data = [];
        },
        toString: function() {
            return data.join(", ");
        }
    };
}

let expect = require('chai').expect;

describe("Test list", function () {
    let newList = {};
    beforeEach(() => {
        newList = makeList();
    });
    describe("Test if the properties exists", function () {
        it("Test if addLeft exist", function () {
            it("The object should has property addList", function () {
                expect(newList.addList).to.exist;
            });
        });
        it("Test if addRight exist", function () {
            it("The object should has property addRight", function () {
                expect(newList.addRight).to.exist;
            });
        });
        it("Test if toStraing exist", function () {
            it("The object should has property toString", function () {
                expect(newList.toString).to.exist;
            });
        });
    });

    describe("Test without commands", function () {
        it("Test without commands", function () {

            expect(newList.toString()).to.be.equal("")
        })
    });
    describe("Test commands", function () {
        it("Test with one command", function () {
            newList.addLeft(5);
            expect(newList.toString()).to.be.equal("5", "Should return 5")
        });
        it("Test with one command", function () {
            newList.addRight(5);
            expect(newList.toString()).to.be.equal("5", "Should return 5")
        });
        it("Test with one command", function () {
            newList.clear();
            expect(newList.toString()).to.be.equal("", "Should return string empty")
        });
        it("Test with several comands", function () {
            newList.addLeft(5);
            newList.addLeft(4);
            newList.addLeft(3);
            newList.addRight(2);
            expect(newList.toString()).to.be.equal("3, 4, 5, 2", "Should return 3, 4, 5, 2")
        });
        it("Test with several comands", function () {
            newList.addRight(5);
            newList.addLeft(3);
            newList.addLeft(2);
            newList.addLeft(2);
            expect(newList.toString()).to.be.equal("2, 2, 3, 5", "Should return 2, 2, 3, 5")
        });
        it("Test with several comands", function () {
            newList.addRight(5);
            newList.addLeft(3);
            newList.addLeft(2);
            newList.addLeft(2);
            newList.clear();
            expect(newList.toString()).to.be.equal("", "Should return string empty")
        });
    });
});