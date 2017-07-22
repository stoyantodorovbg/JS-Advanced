/**
 * Created by Stoyan on 12.7.2017 г..
 */
class Textbox {
    constructor(selector, regex) {
        this._elements = $(selector);
        this._value = $(this.elements[0]).val();
        this._invalidSymbols = regex;
        this.onInput();
    }

    onInput() {
        let that = this;
        that.elements.on('input', function () {
            let text = $(this).val();
            that.value = text;
        });

    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        for (let element of this.elements) {
            $(element).val(value);
        }
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return !this._invalidSymbols.test(this.value);
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input',function(){console.log(textbox.value);});
