/**
 * Created by Stoyan on 5.7.2017 г..
 */
function process(arr) {
    let commandsProcess = (function () {
        let result = [];
        return {
            add: (newItem) => result.push(newItem),
            remove: (item) => result = result.filter(e => e != item),
            print: () => console.log(result.join(','))
        }
    }());

    let result = [];
    for (let el of arr) {
        let line = el.split(' ');
        let command = line[0];
        let content = line[1];
        commandsProcess[command](content);
    }
}

process(['add hello', 'add again', 'remove hello', 'add again', 'print']);