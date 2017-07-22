/**
 * Created by Stoyan on 26.6.2017 г..
 */
function attachEvents() {
    $('li').on('click', selectTown);
    function selectTown() {
        let li = $(this);
        if (li.attr('data-selected')) {
            li.removeAttr('data-selected');
            li.css('background', '');
        } else {
            li.attr('data-selected', 'true');
            li.css('background', '#DDD')
        }

    }
    $('#showTownsButton').on('click', showSelected);

    function showSelected() {
        let selected = [];
        for (let sel of $('li')) {
            if ($(sel).attr('data-selected')){
                selected.push(sel.textContent);
            }
        }
        $('#selectedTowns').text('Selected towns: ' + selected.join(', '));
    }
}

