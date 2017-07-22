/**
 * Created by Stoyan on 15.7.2017 г..
 */


let mapSort = function mapSorting(map, sortMethod) {
        if (sortMethod === 'KeysNumbersAsc') {
            map = new Map([...map].sort((a, b) => a[0] - b[0]));
             return map;
        }
        else if (sortMethod === 'KeysNumbersDesc') {
            map = new Map([...map].sort((a, b) => b[0] - a[0]));
            return map;
        } else if (sortMethod === 'KeysStringsAsc') {
            map = new Map([...map].sort((a, b) => a[0] > b[0]));
            return map;
        } else if (sortMethod === 'KeysStringsDesc') {
            map = new Map([...map].sort((a, b) => a[0] > b[0]));
            return map;
        } else if (sortMethod === 'ValuesNumbersAsc') {
            map = new Map([...map].sort((a, b) => a[1] - b[1]));
            return map;
        } else if (sortMethod === 'ValuesNumbersDesc') {
            map = new Map([...map].sort((a, b) => b[1] - a[1]));
            return map;
        } else if (sortMethod === 'ValuesStringsAsc') {
            map = new Map([...map].sort((a, b) => a[1] > b[1]));
            return map;
        } else if (sortMethod === 'ValuesStringsDesc') {
            map = new Map([...map].sort((a, b) => a[1] > b[1]));
            return map;
        }

        return map = new Map([...map].sort((a, b) => a[0] > b[0]));
    };

module.exports = mapSort;
//let map = new Map();
//map.set(3,"Pesho");
//map.set(1,"Gosho");
//map.set(7,"Aleks");
//console.log(map);
//console.log(mapSort(map));






