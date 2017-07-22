/**
 * Created by Stoyan on 15.7.2017 г..
 */
class Person {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return `I'm ${this.name}`;
    }
}

module.exports = Person;