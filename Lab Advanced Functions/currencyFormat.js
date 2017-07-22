/**
 * Created by Stoyan on 30.6.2017 г..
 */
    function currencyFormatter(separator, symbol, symbolFirst, value) {
        let result = Math.trunc(value) + separator;
        result += value.toFixed(2).substr(-2,2);
        if (symbolFirst) return symbol + ' ' + result;
        else return result + ' ' + symbol;
    }
    let dollars = getDollarFormatter(currencyFormatter);

    function  getDollarFormatter(dollars) {
        return function (value) {
            return dollars(',', '$', true, value);
        }
    }








