/**
 * Created by Stoyan on 11.7.2017 г..
 */
let func = (function() {
    let id = 0;

    return class Extensible {
        constructor () {
            this.id = id++;
        }

        extend (template) {
            for (let prop in template) {
                if (typeof  template[prop] === "function") {
                    Extensible.prototype[prop] = template[prop];
                } else {
                    this[prop] = template[prop];
                }
            }
        }


    }


})();

let obj1 = new func();
let obj2 = new func();
let obj3 = new func();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
obj3.extend(template = {
    extensionMethod: function () {
        console.log('hi!')
    },
    extensionProperty: 'someString'
    });

console.log(func.prototype);
console.log(obj3);

let obj4 = new func();

console.log(obj4.id);
