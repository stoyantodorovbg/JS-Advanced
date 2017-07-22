/**
 * Created by Stoyan on 21.7.2017 г..
 */
class Entity{
    constructor(name){
        if(new.target == Entity){
            throw new Error("Cannot make instance of abstract class Entity.");
        }
        this.name = name;
    }
}

module.exports = Entity;