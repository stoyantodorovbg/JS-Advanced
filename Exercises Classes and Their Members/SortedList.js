/**
 * Created by Stoyan on 12.7.2017 г..
 */
let sortList = (function () {
    let collect = [];

    return class Exec {
        constructor() {
            this.collect = collect;
            this.size = this.collect.length;
        }

        add (element) {
            this.collect.push(element);
            this.collect = this.collect.sort((a, b) => a - b);
            this.size++;
        }

        remove (index) {
            if (index >= 0 && index < collect.length) {
                this.collect.splice(index, 1);
                this.size--;
            }
        }

        get (index) {
            if (index >= 0 && index < collect.length) {

                return this.collect[index];
            }
        }

    }
})();

let list = new sortList();
list.add(5);
list.add(4);
list.add(3);
list.add(6);
list.add(8);
list.add(10);
list.remove(1)
console.log(list.get(0))
list.get(0)

console.log(list.collect);
console.log(list.size);

