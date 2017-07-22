(() => {
    let Suits = {
        SPADES: '\u2660',
        HEARTS : '\u2665',
        DIAMONDS : '\u2666',
        CLUBS : '\u2663'

    };

    class Card {
        constructor(face, suit){
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(face) {
            if (!Card.validFaces.includes(face)) {
                throw  new Error("Invalid card face")
            }
            this._face = face;
        }

        get suit() {
            return this._suit
        }

        set suit(suit) {
            if (!Object.keys(Suits).map(k => Suits[k]).includes(suit)) {
                throw new Error("Invalid card suit")
            }
            this._suit = suit;
        }

        toString() {
            return this.face + this.suit;
        }

        static get validFaces() {
            return Card._validFaces;
        }

    }

    Card._validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    return {Suits, Card}
})()