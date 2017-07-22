/**
 * Created by Stoyan on 8.7.2017 г..
 */
(function addToPrototype() {
    String.prototype.ensureStart = function (str) {
        let substr = this.substr(0, str.length)
        if (substr !== str) {
            return str + this;

        } else {
            return this.toString();
        }
    };

    String.prototype.ensureEnd = function (str) {
        let substr = this.substr(-str.length)
        if (substr !== str) {
            return this + str;
        } else {
            return this.toString();
        }
    };

    String.prototype.isEmpty = function () {
        if (this == '') {
            return true;
        } else {
            return false;
        }
    };

    String.prototype.truncate = function (n) {
        let result;
        if (this.length < n) {
            return this.toString();
        } else if (n <= 3) {
            return '.'.repeat(n);
        } else if (this.indexOf(' ') !== -1) {
            if (n <= this.length - 3 && n >= this.length - 3) {
                result = this.toString();
                result = result.slice(0, n - 3);
                return result + '.'.repeat(this.length - n);
            } else if (n < this.length - 3) {
                result = this.toString();
                return result += '...';
            }

        }
    };

    String.format = function () {
        let params = [];
        let text = arguments[0];

        for (let i = 1; i < arguments.length; i++){
            params.push(arguments[i]);
        }

        for (let i = 0; i < params.length; i++){
            text = text.replace(text.match(/[{}0-9]+/), params[i] );
        }


        return text;
    }
})();

let str = 'my string';
console.log(str.isEmpty());
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);


str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}',
    'dog');
console.log(str);




