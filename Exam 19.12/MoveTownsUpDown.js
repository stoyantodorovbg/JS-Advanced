/**
 * Created by Stoyan on 17.7.2017 г..
 */
function move() {
    let options = $('option')
    options.click(function () {
        $('option.selected').removeClass('selected');
        $(this).addClass('selected');
    });
    $('#btnUp').click(() => {
        $('option.selected').insertBefore($('option.selected').prev())
    });
    $('#btnDown').click(() => {
        $('option.selected').insertAfter($('option.selected').next())
    });
}



