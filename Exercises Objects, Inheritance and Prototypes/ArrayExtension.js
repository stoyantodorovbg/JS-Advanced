/**
 * Created by Stoyan on 8.7.2017 г..
 */
(function solve(){
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        return this.slice(n);
    };

    Array.prototype.take = function (n) {
        let arr  = [];
        for (let i = 0; i < n; i++) {
            arr.push(this[i]);
        }
        return arr;
    };

    Array.prototype.sum = function () {
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            sum += this[i];
        }
        return sum;
    };

    Array.prototype.average = function () {
        let av = 0;
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            sum += this[i];
        }
        av = sum / this.length;
        return av;
    }
})();

let a = [23, 33];
console.log(a.sum());