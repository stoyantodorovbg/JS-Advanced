/**
 * Created by Stoyan on 22.7.2017 г..
 */
function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}


let expect = require('chai').expect;

describe("Test CreateList", function () {
    let list;
    beforeEach(() => {
        list = createList();
    });

    describe("Test if the properties exists", function () {
        it("test from property has", function () {
            expect(list.add).to.exist;
        });
        it("test from property shiftLeft", function () {
            expect(list.shiftLeft).to.exist;
        });
        it("test from property shiftRight", function () {
            expect(list.shiftRight).to.exist;
        });
        it("test from property swap", function () {
            expect(list.swap).to.exist;
        });
        it("test from property toString", function () {
            expect(list.toString).to.exist;
        });
    });
    describe("Test add", function () {
        it("Test with one element", function () {
            list.add(5);
            expect('' + list).to.be.equal('5', "Should return 5");
        });
        it("Test with many elements", function () {
            list.add(5);
            list.add(6);
            expect(list.toString()).to.be.equal('5, 6', "Should return 5");
        });
        it("Test with many elements, some of witch is {}", function () {
            list.add(5);
            list.add(6);
            list.add({pesho: 'gosho', dragan: 3});
            expect(list.toString()).to.be.equal("5, 6, [object Object]", "Should return 5");
        });
        it("Test with many elements, some of witch is pesho", function () {
            list.add(5);
            list.add({});
            list.add('pesho');
            expect(list.toString()).to.be.equal("5, [object Object], pesho", "Should return 5");
        });
    });
    describe("Test shiftLeft", function () {
        it("Test with one element", function () {
            list.add(5);
            list.add(6);
            list.add(7);
            list.shiftLeft();
            expect(list.toString()).to.be.equal('6, 7, 5', "Should return 6, 7, 5");
        });
        it("Test with one element", function () {
            list.add(5);
            list.shiftLeft();
            expect(list.toString()).to.be.equal('5', "Should return 5");
        });
        it("Test without elements", function () {
            list.shiftLeft();
            expect(list.toString()).to.be.equal('', "Should return ''");
        });
        it("Test with one element", function () {
            list.add(5);
            list.add(6);
            list.add('eight');
            list.shiftLeft();
            expect(list.toString()).to.be.equal('6, eight, 5', "Should return 6, 7, 5");
        });
        it("Test with one element", function () {
            list.add('hi');
            list.shiftLeft();
            expect(list.toString()).to.be.equal('5', "Should return 5");
        });
    });
    describe("Test shiftRight", function () {
        it("Test with one element", function () {
            list.add(5);
            list.add(6);
            list.add(7);
            list.shiftRight();
            expect(list.toString()).to.be.equal('7, 5, 6', "Should return 7, 5, 6");
        });
        it("Test with one element", function () {
            list.add(5);
            list.shiftRight();
            expect(list.toString()).to.be.equal('5', "Should return 5");
        });
        it("Test with one element", function () {
            list.add(5);
            list.add(6);
            list.add('hi');
            list.shiftRight();
            expect(list.toString()).to.be.equal('hi, 5, 6', "Should return 7, 5, 6");
        });
        it("Test with one element", function () {
            list.add('hi');
            list.shiftRight();
            expect(list.toString()).to.be.equal('hi', "Should return 5");
        });
        it("Test without elements", function () {
            list.shiftRight();
            expect(list.toString()).to.be.equal('', "Should return ''");
        });
    });
    describe("Test swap", function () {
        describe("Test with invalid index1", function () {
            it("Test with not integer", function () {
                list.add(5);
                list.add(6);
                list.add(7);
                expect(list.swap('s', 1)).to.equal(false, "Should return false");
            });
            it("Test with less of 0", function () {
                list.add(5);
                list.add(6);
                list.add(7);
                expect(list.swap(-1, 1)).to.equal(false, "Should return false");
            });
            it("Test with a bigger of data.length", function () {
                list.add(5);
                list.add(6);
                list.add(7);
                expect(list.swap(4, 1)).to.equal(false, "Should return false");
            });
            it("Test with un index equal to the length of the colection", function () {
                list.add(5);
                list.add(6);
                list.add(7);
                expect(list.swap(3, 1)).to.equal(false, "Should return false");
            });
        });
        describe("Test with invalid index2", function () {
            it("Test with not integer", function () {
                list.add(5);
                list.add(6);
                list.add(7);
                expect(list.swap(1, 's')).to.equal(false, "Should return false");
            });
            it("Test with less of 0", function () {
                list.add(5);
                list.add(6);
                list.add(7);
                expect(list.swap(1, -1)).to.equal(false, "Should return false");
            });
            it("Test with a bigger of data.length", function () {
                list.add(5);
                list.add(6);
                list.add(7);
                expect(list.swap(1, 4)).to.equal(false, "Should return false");
            });
            it("Test with un index equal to the length of the colection", function () {
                list.add(5);
                list.add(6);
                list.add(7);
                expect(list.swap(1, 3)).to.equal(false, "Should return false");
            });
        });
        describe("Test with two invalid indexes", function () {
            it("Test with not integer", function () {
                list.add(5);
                list.add(6);
                list.add(7);
                expect(list.swap('r', 's')).to.equal(false, "Should return false");
            });
            it("Test with less of 0", function () {
                list.add(5);
                list.add(6);
                list.add(7);
                expect(list.swap(-1, -1)).to.equal(false, "Should return false");
            });
            it("Test with a bigger of data.length", function () {
                list.add(5);
                list.add(6);
                list.add(7);
                expect(list.swap(6, 4)).to.equal(false, "Should return false");
            });
            it("Test with equal indexes", function () {
                list.add(5);
                list.add(6);
                list.add(7);
                expect(list.swap(2, 2)).to.equal(false, "Should return false");
            });
            it("Test with equal indexes", function () {
                list.add(5);
                list.add(6);
                list.add(7);
                expect(list.swap('pesho', 'pesho')).to.equal(false, "Should return false");
            });
        });
        describe("Test with valid indexes", function () {
            it("Test with equal indexes", function () {
                list.add(5);
                list.add(6);
                list.add(7);
                list.swap(0, 2);
                expect(list.toString()).to.equal('7, 6, 5', "Should return 7, 6, 5");
            });
            it("Test with equal indexes", function () {
                list.add('pesho');
                list.add(6);
                list.add('gosho');
                list.swap(0, 2);
                expect(list.toString()).to.equal('gosho, 6, pesho', "Should return 7, 6, 5");
            });
            it("Test with equal indexes", function () {
                list.add({});
                list.add(6);
                list.add({});
                list.swap(0, 2);
                expect(list.toString()).to.equal('[object Object], 6, [object Object]', "Should return 7, 6, 5");
            });
        });
        describe("Test toString", function () {
            it("Test", function () {
                list.add(5);
                list.add(6);
                list.add(7);
                expect(list.toString()).to.be.equal('5, 6, 7', "Should return 5, 6, 7");
            });
        });
    });
});
