/**
 * Created by Stoyan on 5.7.2017 г..
 */
function getModel() {
    let input1, input2, result;

    function init(num1, num2, res) {
        input1 = $(num1);
        input2 = $(num2);
        result = $(res);
    }
    function add() {
       result.val(Number(input1.val()) + Number(input2.val()));
    }
    function subtract() {
       result.val(Number(input1.val()) - Number(input2.val()));
    }

    return {
        init,
        add,
        subtract
    };
}




