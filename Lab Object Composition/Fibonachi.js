/**
 * Created by Stoyan on 5.7.2017 г..
 */
function next() {
    let firstNum = 0;
    let secNum = 1;
    return function () {
        let newNum = firstNum + secNum;
        firstNum = secNum;
        secNum = newNum;
        console.log(firstNum);
    }

}

let nextFibNum = next();

nextFibNum();
nextFibNum();
nextFibNum();
nextFibNum();
nextFibNum();
nextFibNum();