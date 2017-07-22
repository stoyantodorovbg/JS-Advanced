/**
 * Created by Stoyan on 21.7.2017 г..
 */
let data = require('./Data');

function sort(property) {
    let result = data;

    result = result.sort((a, b) =>  a[property].localeCompare(b[property]));
    return result;
}

function filter(property, value) {
    let result = [];
    for (obj of data) {
        if (obj.hasOwnProperty(property) && obj[property] === value) {
            result.push(obj);
        }
    }
    return result;
}

//result.sort = sort;
//result.filter = filter;


console.log(sort('shipTo'));
console.log('------------------');
console.log(filter('status', 'shipped'));


