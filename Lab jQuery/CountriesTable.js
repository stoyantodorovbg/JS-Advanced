/**
 * Created by Stoyan on 25.6.2017 г..
 */
function initializeTable() {
    $('#createLink').click(create);

    create('Bulgaria', 'Sofia');
    create('Germany', 'Berlin');
    create('Russia', 'Moscow');

    hideLinks();

    function create(country, capital) {
        let newCountry = $('#newCountryText').val();
        let newCapital = $('#newCapitalText').val();;
        let initialize = false;

        if (country != undefined && capital != undefined) {
            newCountry = country;
            newCapital = capital;
            initialize = true;
        }
        let row = $('<tr>');
        row.append($(`<td>${newCountry}</td>`));
        row.append($(`<td>${newCapital}</td>`));
        row.append($('<td>')
           .append($('<a href="#" id="up">[Up]</a>').click(moveUp))
           .append($('<a href="#" id="down">[Down]</a>').click(moveDown))
           .append($('<a href="#" id="delete">[Delete]</a>').click(deleteRow))
            .append('</td>'));
        row.css('display', 'none');
        $('#countriesTable').append(row);
        row.fadeIn();
        if (!initialize) {
            hideLinks();
        }
    }
    
    function  moveUp() {
        let row = $(this).parent().parent();
        row.fadeOut(function(){
            row.insertBefore(row.prev());
            row.fadeIn();
            hideLinks();
        });
    }
    
    function moveDown() {
        let row = $(this).parent().parent();
        row.fadeOut(function(){
            row.insertAfter(row.next());
            row.fadeIn();
            hideLinks();
        });
    }
    
    function deleteRow() {
        let row = $(this).parent().parent();
        row.fadeOut(function(){
            row.remove();
            hideLinks();
        });
    }

    function hideLinks() {
        $('#countriesTable a').css('display', 'inline');
        let line = $('#countriesTable tr');
        $(line[2]).find('a:contains("Up")').css('display', 'none');

        $(line[line.length - 1]).find('a:contains("Down")').css('display', 'none');
    }
}
