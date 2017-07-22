/**
 * Created by Stoyan on 25.6.2017 г..
 */
function search() {
    let input = $('#searchText').val();
    let matches = 0;
    for (let town of $('ul#towns li')) {
        if (town.textContent.includes(input)) {
            $(town).css('font-weight', 'bold');
            matches++;
        }
    }
    $('#result').text(`${matches} matches found.`)
    
}