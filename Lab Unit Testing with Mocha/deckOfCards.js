/**
 * Created by Stoyan on 7.7.2017 г..
 */
function printDeckOfCards(cards) {
    let invalidCard = false;
    let result = [];
    let invalidCards = [];
    for (let card of cards) {
        let suit = card.substring(card.length - 1);
        let face = card.substring(0, card.length - 1);
        makeCard(face, suit, card);

    }

    function makeCard(face, suit, card) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = ['S', 'H', 'D', 'C'];

        if (!faces.includes(face)) {
            invalidCard = true;
            invalidCards.push(card);
        } else if (!suits.includes(suit)) {
            invalidCard = true;
            invalidCards.push(card);
        }

        let cardFormat = {
            face: face,
            suit: printSuit(suit),
        };

        result.push(cardFormat.face + cardFormat.suit);


        function printSuit(suit) {
            switch (suit) {
                case 'S':
                    return '\u2660';
                case 'H':
                    return '\u2665';
                case 'D':
                    return '\u2666';
                case 'C':
                    return '\u2663';
            }
        }
    }

    if (invalidCard) {
        console.log('Invalid card: ' + invalidCards);
    } else {
        console.log(result.join(' '));
    }
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
