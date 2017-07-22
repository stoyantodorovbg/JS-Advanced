/**
 * Created by Stoyan on 2.7.2017 г..
 */
function result () {
    let counts = [];
    for (let argument of arguments) {
        console.log(`${typeof argument}: ${argument}`);

        if (!counts[typeof argument]) {
            counts[typeof argument] = 1;
        } else {
            counts[typeof argument]++;
        }
    }
    let sortedCounts = [];
    for (let type in counts) {
        sortedCounts.push([type, counts[type]]);
    }
    sortedCounts = sortedCounts.sort((a, b) => b[1] - a[1]);
    for (let type of sortedCounts) {
        console.log(`${type[0]} = ${type[1]}`)
    }
}

result(2, 'cat', 'a',  42, 3.333, function () { console.log('Hello world!'); });