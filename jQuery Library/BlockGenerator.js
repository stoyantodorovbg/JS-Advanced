/**
 * Created by Stoyan on 28.6.2017 г..
 */
function createBook (selector, title, author, isbn) {
    let bookGenerator = (function () {
        let id = 1;
        return function (selector, title, author, isbn) {
            let container = $(selector);
            let bookContainer = $('<div>');
            bookContainer.attr('id', `book${id}`);
            bookContainer.css('border', 'none');
            $(`<p class="title">${title}</p>`).appendTo(bookContainer);
            $(`<p class="author">${author}</p>`).appendTo(bookContainer);
            $(`<p class="isbn">${isbn}</p>`).appendTo(bookContainer);
            let select = $('<button>Select</button>');
                select.appendTo(bookContainer);
                select.on('click', selectBookContainer);
            let deselect = $('<button>Deselect</button>');
                deselect.appendTo(bookContainer);
                deselect.on('click', deselectBookContainer);
                bookContainer.appendTo(container);

            id++;

            function selectBookContainer() {
                bookContainer.css('border', '2px solid blue');
            }

            function deselectBookContainer() {
                bookContainer.css('border', 'none');
            }
        }
    } ());

    bookGenerator(selector, title, author, isbn);
}