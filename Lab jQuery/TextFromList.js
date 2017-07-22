/**
 * Created by Stoyan on 23.6.2017 г..
 */
function extractText() {
    let lis = $('li');
    let resultArr = [];
    for (let li of lis) {
        resultArr.push(li.textContent);
    }
    $('#result').text(resultArr.join(', '));
}