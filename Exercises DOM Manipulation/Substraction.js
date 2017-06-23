/**
 * Created by Stoyan on 22.6.2017 г..
 */
window.onload = function calculate () {
    "use strict";
    let firstNum = document.getElementById('firstNumber');
    let secondNum = document. getElementById('secondNumber');
    let result = document.getElementById('result');
    result.textContent = Number(firstNum.value) - Number(secondNum.value);
}
