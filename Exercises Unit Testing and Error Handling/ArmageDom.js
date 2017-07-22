/**
 * Created by Stoyan on 10.7.2017 г..
 */
function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
}

let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

describe("Test ArmageDom", function () {
    let targetHtml;
    beforeEach(function () {
        document.body.innerHtml = `<body>
            <div id="target">
                <div class="nested target">
                    <p>This is some text</p>
                </div>
                <div class="target">
                    <p>Empty div</p>
                </div>
                <div class="inside">
                    <span class="nested">Some more text</span>
                    <span class="target">Some more text</span>
                </div>
            </div>
            </body>`;
        targetHtml = $('#target');
    });
    it("Test with valid and invalid selectors", function () {
        let selector1 = $('.inside');
        let selector2 = 10;
        let oldHtml = targetHtml.html();
        nuke(selector1, selector2);
        expect(targetHtml.html()).to.be.equal(oldHtml, "Html, has changed.");
    });
    it("Test with valid and invalid selectors", function () {
        let selector1 = 10;
        let selector2 = $('.inside');
        let oldHtml = targetHtml.html();
        nuke(selector1, selector2);
        expect(targetHtml.html()).to.be.equal(oldHtml, "Html, has changed.");
    });
    it("Test with a missing selector", function () {
        let selector2 = $('.inside');
        let oldHtml = targetHtml.html();
        nuke(selector2);
        expect(targetHtml.html()).to.be.equal(oldHtml, "Html, has changed.");
    });
    it("Test with equals selectors", function () {
        let selector1 = $('.nested');
        let oldHtml = targetHtml.html();
        nuke(selector1, selector1);
        expect(targetHtml.html()).to.be.equal(oldHtml, "Html, has changed.");
    });
    it("Test with two selectors", function () {
        let selector1 = $('.nested');
        let selector2 = $('.target');
        let oldHtml = targetHtml.html();
        nuke(selector1, selector2);
        expect(targetHtml.html()).to.be.equal(oldHtml, "Html hasn't change.")
    });
    it("Test with two valid selectors. Html shouldn't change.", function () {
        let selector1 = $('nested');
        let oldHtml = targetHtml.html();
        nuke(selector1, selector1);
        expect(targetHtml.html()).to.be.equal(oldHtml, "Html has chanced.")
    });
    it("Test with two valid selectors. Html shouldn't change.", function () {
        let selector1 = $('nested');
        let selector2 = $('inside');
        let oldHtml = targetHtml.html();
        nuke(selector1, selector2);
        expect(targetHtml.html()).to.be.equal(oldHtml, "Html has chanced.")
    });
});