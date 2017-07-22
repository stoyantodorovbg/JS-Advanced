/**
 * Created by Stoyan on 3.7.2017 г..
 */
(function () {
    let sum = 0;
    
    return function add(number) {
        sum += number;
        add.toString = function () {
            return sum;
        };

        return add;
    }
})();

console.log(solve(1)(6)(-3).toString());
