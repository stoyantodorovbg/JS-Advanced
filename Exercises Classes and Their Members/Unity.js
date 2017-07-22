/**
 * Created by Stoyan on 10.7.2017 г..
 */
class Rat {
    constructor(name, rats = []){
        this.name = name;
        this.rats = rats;
    }

    unite(otherRat){
        if (otherRat instanceof Rat){
            this.rats.push(otherRat);
        }
    }
    getRats(){
        return this.rats;
    }

    toString(){
        let rats = this.getRats();
        let ratNamesArr = [];
        for (let rat of rats) {
            ratNamesArr.push('#'+rat.name);
        }
        return `${this.name}\n${ratNamesArr.join('\n')}`;
    }
}

let test = new Rat("Pesho");
console.log(test.toString());

console.log(test.getRats());

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());

console.log(test.toString());


