/**
 * Created by Stoyan on 9.7.2017 г..
 */
function highlight (selector) {
    let deepestPath = 0;
    let deepestElement;
    let allLeafElements = $(`${selector} *:not(:has(*))`);
    allLeafElements.each(function (index, element) {
        let currentDeepestLevel = 0;
        let originalLeaf = element;
        while (element) {
            currentDeepestLevel++;
            element = $(element).parent()[0];
        }

        if (currentDeepestLevel > deepestPath) {
            deepestPath = currentDeepestLevel;
            deepestElement = originalLeaf;
        }
    });

    let selectedElement = $(selector)[0]

    while (deepestElement && deepestElement !== selectedElement) {
        $(deepestElement).addClass('highlight');
        deepestElement = $(deepestElement).parent()[0];
    }

    $(selector).addClass('highlight');
}