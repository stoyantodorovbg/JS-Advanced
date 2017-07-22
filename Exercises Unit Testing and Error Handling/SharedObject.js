/**
 * Created by Stoyan on 9.7.2017 г..
 */
let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};


let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<body>
<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
</div>
</body>`;

describe("Test sharedObject", function () {
    describe("Initial value", function () {
        it("initial name should be null", function () {
            expect(sharedObject.name).to.be.null;
        });
        it("initial income should be null", function () {
            expect(sharedObject.income).to.be.null;
        });
    });
    describe("Change name", function () {
        it("string empty shouldn't change the name", function () {
            let oldName = sharedObject.name;
            sharedObject.changeName("");
            expect(sharedObject.name).to.be.equal(oldName);
        });
        it("name should change", function () {
            sharedObject.changeName("someName");
            expect(sharedObject.name).to.be.equal("someName")
        });
        it("input field with id name should changes", function () {
            sharedObject.changeName("someName");
            expect($('#name').val()).to.be.equal("someName")
        });
    });
    describe("Change income", function () {
        it("non-number input shouldn't changes the property income", function () {
            let oldIncome = sharedObject.income;
            sharedObject.changeIncome("5");
            expect(sharedObject.income).to.be.equal(oldIncome);
        });
        it("non-number input shouldn't changes the property income", function () {
            let oldIncome = sharedObject.income;
            sharedObject.changeIncome("gdfgh");
            expect(sharedObject.income).to.be.equal(oldIncome);
        });
        it("non-number input shouldn't changes the property income", function () {
            let oldIncome = sharedObject.income;
            sharedObject.changeIncome("");
            expect(sharedObject.income).to.be.equal(oldIncome);
        });
        it("input should be greeter then zero", function () {
            let oldIncome = sharedObject.income;
            sharedObject.changeIncome(-5);
            expect(sharedObject.income).to.be.equal(oldIncome);
        });
        it("input should be greeter then zero", function () {
            let oldIncome = sharedObject.income;
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(oldIncome);
        });
        it("the property income should changes", function () {
            sharedObject.changeIncome(5);
            expect(sharedObject.income).to.be.equal(5)
        });
        it("input field with id income should changes", function () {
            sharedObject.changeName(5);
            expect($('#income').val()).to.be.equal("5")
        });
    });
    describe("Update name", function () {
        it("string empty shouldn't change the name", function () {
            let oldName = sharedObject.name;
            $('#name').val("");
            expect(sharedObject.name).to.be.equal(oldName);
        });
        it("name should change", function () {
            $('#name').val("newName");
            expect(sharedObject.name).to.be.equal($('#name').val())
        });
    });
    describe("Update income", function () {
        it("income shouldn't be NaN", function () {
            let oldIncome = sharedObject.income;
            $('#income').val(NaN);
            expect(sharedObject.income).to.be.equal(oldIncome);
        });
        it("income should parse to number", function () {
            let oldIncome = sharedObject.income;
            $('#income').val("text");
            expect(sharedObject.income).to.be.equal(oldIncome);
        });
        it("income should be greater of zero", function () {
            let oldIncome = sharedObject.income;
            $('#income').val(-5);
            expect(sharedObject.income).to.be.equal(oldIncome);
        });
        it("the property income should changes", function () {
            $('#income').val(5);
            expect(sharedObject.income).to.be.equal(5)
        });
        it("input field with id income should changes", function () {
            $('#income').val(5);
            expect($('#income').val()).to.be.equal("5")
        });

    });
});