/**
 * Created by Stoyan on 10.7.2017 г..
 */
class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length){
        this.innerLength += length;
        return this.innerLength;
    }

    decrease(length){
        this.innerLength -= length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
        return this.innerLength;
    }

    toString() {
        let result = '';
        if (this.innerLength === 0) {
           result = '...';
        } else if (this.innerLength < this.innerString.length) {
            result = this.innerString.substring(0, this.innerLength);
            result += '...';
        } else if (this.innerLength >= this.innerString.length) {
            result = this.innerString;
        }

        return result;
    }
}

let test = new Stringer('Test',3);
console.log(test.toString());
test.decrease(3);
console.log(test.toString());
test.increase(5);
console.log(test.toString());
