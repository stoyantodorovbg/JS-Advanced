/**
 * Created by Stoyan on 3.7.2017 г..
 */
function solve() {

    let repository = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    return function solve (input) {
        input = input.split(' ');
        let command = input[0];
        let meal = input[1];
        let quentity = Number(input[2]);
        let enough = true;
        switch (command) {
            case 'restock':
                restock(meal, quentity);
                break;
            case 'prepare':
                prepare(meal, quentity);
                if (enough) {
                    ifEnough();
                }
                break;
            case 'report':
                report();
                break;
        }



        function restock () {
            repository[`${meal}`] += quentity;
            return 'Success';
        }



        function prepare () {
            let recipies = {
                apple: {carbohydrate: 1, flavour: 2},
                coke: {carbohydrate: 10, flavour: 20},
                burger: {carbohydrate: 5, fat: 7, flavour: 3},
                omlet: {protein: 5, fat: 1, flavour: 1},
                cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
            };

            if (recipies[`${meal}`].hasOwnProperty('protein') && recipies[`${meal}`].protein > repository.protein * quentity) {
                enough = false;
                return `Error: not enough protein in stock`;
            } else if (recipies[`${meal}`].hasOwnProperty('carbohydrate') && recipies[`${meal}`].carbohydrate > repository.carbohydrate *quentity) {
                enough = false;
                return `Error: not enough carbohydrate in stock`;
            } else if (recipies[`${meal}`].hasOwnProperty('fat') && recipies[`${meal}`].fat > repository.fat * quentity) {
                enough = false;
                return `Error: not enough fat in stock`;
            } else if (recipies[`${meal}`].hasOwnProperty('flavour') && recipies[`${meal}`].flavour > repository.flavour * quentity) {
                enough = false;
                return `Error: not enough flavour in stock`;
            }
        }
        function ifEnough() {
            let recipies = {
                apple: {carbohydrate: 1, flavour: 2},
                coke: {carbohydrate: 10, flavour: 20},
                burger: {carbohydrate: 5, fat: 7, flavour: 3},
                omlet: {protein: 5, fat: 1, flavour: 1},
                cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
            };
                if (recipies[`${meal}`].hasOwnProperty('protein')) {
                    repository.protein -= recipies[`${meal}`].protein * quentity;
                } else if (recipies[`${meal}`].hasOwnProperty('carbohydrate')) {
                    repository.carbohydrate -= recipies[`${meal}`].carbohydrate * quentity;
                } else if (recipies[`${meal}`].hasOwnProperty('fat')) {
                    repository.fat -= recipies[`${meal}`].fat * quentity;
                } else if (recipies[`${meal}`].hasOwnProperty('flavour')) {
                    repository.flavour -= recipies[`${meal}`].flavour * quentity;
                }
                return 'Success';
            }

        function report () {
            return `protein=${repository.protein} carbohydrate=${repository.carbohydrate} fat=${repository.fat} flavour=${repository.flavour}`;
        }
    }
}


