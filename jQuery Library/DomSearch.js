function domSearch(selector, caseSensitive = false) {
    // "use strict";
    let container = $(`${selector}`);
    let domContainer = $('div');
    // domContainer.attr('id', 'content');
    domContainer.attr('class', 'items-control');
    $('<div class="add-controls">').appendTo($('div.items-control'));
    $('<label>Enter text: </label>').appendTo($('div.add-controls'));
    $('<input>').appendTo($("label:contains('Enter text: ')"));
    $('<a class="button" style="display: inline-block">Add</a>').on('click', writeLi).appendTo($('div.add-controls'));

    $('<div class="search-controls">').appendTo($('div.items-control'));
    $('<label>Search: </label>').appendTo($('div.search-controls'));
    $('<input>').on('input', search).appendTo($("label:contains('Search: ')"));

    $('<div class="result-controls">').appendTo($('div.items-control'));
    let ul = $('<ul class="items-list">');
    ul.appendTo($('div.result-controls'));
    domContainer.appendTo(container);

    function writeLi() {
        // "use strict";
        let text = $('div.add-controls input').val();
        let item = $('<li class="list-item">');
        $('<a class="button">X</a>').appendTo(item)
            .on('click', function () {
                $(this).parent().remove();
            });
        $(`<strong>${text}</strong>`).appendTo(item);
        item.appendTo($('div.result-controls ul'));
    }

    function search() {
        // "use strict";
        let searched = $('div.search-controls label input').val();
        $('li').css('display', 'none');
        if (caseSensitive) {
            let lis = ul.find($(`li strong:contains("${searched}")`));
            lis.parent().css('display', 'block');

            for (let l of li) {
                if ($(l).text().indexOf(searched.toLowerCase()) != -1) {
                    $(l).css('display', 'block');
                }
            }
        } else {
            let li = $('li');
            for (let l of li) {
                let caseIns = $(l).text().toString().toLowerCase();
                caseIns = caseIns.substr(1);
                if (caseIns.indexOf(searched.toLowerCase()) != -1) {
                    $(l).css('display', 'block');
                }
            }
        }

        if (searched == '') {
            $('li').css('display', 'block');
        }
    }

}