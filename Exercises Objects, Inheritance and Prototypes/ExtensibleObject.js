/**
 * Created by Stoyan on 8.7.2017 г..
 */
function extendObj() {
    let obj =  {
        extend: function(template) {
            for (let key in template) {
                if (template.hasOwnProperty(key)) {
                    let element = template[key];
                    if (typeof element === "function") {
                        obj.__proto__[key] = element;
                    } else {
                        obj[key] = element;
                    }
                }
            }

        }
    };
    return obj;
}

let myObj = extendObj();
let template = {
    extensionMethod: function () {
        console.log('neshto');
    },
    extensionProperty: 'other'
};

myObj.extend(template);
console.log(myObj);
console.log(myObj.__proto__);
