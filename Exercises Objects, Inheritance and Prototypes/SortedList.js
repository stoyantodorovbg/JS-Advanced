/**
 * Created by Stoyan on 9.7.2017 г..
 */
function modifyArr() {
    return {
        arr: [],
        size: 0,
        add: function (element) {
            this.arr.push(element);
            this.sort(this.arr);
            this.size++;
        },
        remove: function (index) {
            if (index >= 0 && index < this.arr.length) {
                this.arr.splice(index, 1);
                this.size--;
            }
        },

        get: function (index) {
            if (index >= 0 && index < this.arr.length) {
                return this.arr[index];
            }

        },

        toString: function () {
            return this.arr.join(' ');
        },
        sort: function (arr) {
            return arr.sort((a, b) => a - b)
        }
    };
}

let arr = modifyArr();
console.log(arr.toString());
arr.add(2);
console.log(arr.toString());
arr.add(11);
arr.add(17);
console.log(arr.toString());
arr.add(8);
arr.add(7);
console.log(arr.toString());
arr.remove(2);
console.log(arr.toString());
console.log(arr.size);
console.log(arr.get(2));

