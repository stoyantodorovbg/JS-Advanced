/**
 * Created by Stoyan on 29.6.2017 г..
 */
function solve () {
    function  reduce(arr, func) {
        let result = arr[0];
        for (let i = 1; i < arr.length; i++) {
            let nextElement = arr[i];
            result = func(result, nextElement);
        }
        return result;

    }

    console.log('Sum = ' + reduce([2,3,10,5], (a, b) => Number(a) + Number(b)));
    console.log('Min = ' + reduce([2,3,10,5], (a, b) => {
            if (Number(a) < Number(b)) return a;
            else return b;
        }));
    console.log('Max = ' + reduce([2,3,10,5], (a, b) => {
            if (Number(a) > Number(b)) return a;
            else return b;
        }));
    console.log('Sum = ' + reduce([2,3,10,5], (a, b) => Number(a) * Number(b)));
    console.log('Sum = ' + reduce([2,3,10,5], (a, b) => '' + a + b));
}