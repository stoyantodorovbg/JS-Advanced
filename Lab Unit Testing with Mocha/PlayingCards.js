/**
 * Created by Stoyan on 6.7.2017 г..
 */
function makeCard(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['S', 'H', 'D', 'C'];

    if (!faces.includes(face)) {
        throw new Error('Invalid card face: ' + face);
    } else if (!suits.includes(suit)) {
        throw new Error('Invalid card suit: ' + suit);
    }

    let card = {
        face: face,
        suit: printSuit(suit),
    };

    return card.face+card.suit;


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

console.log('' + makeCard('A', 'S'));