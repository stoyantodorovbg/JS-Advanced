/**
 * Created by Stoyan on 2.7.2017 г..
 */
function sortArray(arr, order) {
    let ascOrder = function () {
        return (a, b) => a - b;
    };

    let descOrder = function () {
        return (a, b) => b - a;
    };

    let sortmethod = {
        'asc': ascOrder(),
        'desc': descOrder()
    };

    return arr.sort(sortmethod[order]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));