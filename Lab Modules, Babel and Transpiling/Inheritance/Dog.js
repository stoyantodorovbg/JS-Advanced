/**
 * Created by Stoyan on 21.7.2017 г..
 */
let Entity = require('./Entity');

class Dog extends Entity{
    constructor(name){
        super(name);
    }

    saySomething(){
        return `${this.name} barks!`;
    }
}

module.exports = Dog;