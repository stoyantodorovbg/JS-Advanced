/**
 * Created by Stoyan on 13.7.2017 г..
 */
function submitInJudje() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);

            this._ribbon = {color: ribbonColor, length: ribbonLength};
        }

        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text() {
            return this._text;
        }
        set text(_text) {
            this._text = _text;
        }
    }

    return {
        Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon: BirthdayBalloon
    }
}
let create = submitInJudje();
let partyBalloon = new create.PartyBalloon('red', 100, 'green', 10);
let birthdayBalloon = new create.BirthdayBalloon('blue', 150, 'orange', 11);
birthdayBalloon.text = 'Greetings!';
console.log(partyBalloon);
console.log(birthdayBalloon);
console.log(partyBalloon.ribbon);
console.log(birthdayBalloon.text);
