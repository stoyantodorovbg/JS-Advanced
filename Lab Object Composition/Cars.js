/**
 * Created by Stoyan on 5.7.2017 г..
 */
function processComands(commands) {
    let map = new Map();
    let executor = {
        create: function ([objName, inherits, parent]) {
            parent = parent ? map.get(parent) : null;
            let newObj = Object.create(parent);
            map.set(objName, newObj);
            return newObj;
        },
        set: function ([objName, key, value]) {
            let obj = map.get(objName);
            obj[key] = value;
        },
        print: function ([objName]) {
            let obj = map.get(objName), objects = [];
            for (let key in obj) { objects.push(`${key}:${obj[key]}`); }
            console.log(objects.join(', '));
        }

    };
    for (let command of commands) {
        let commandArr = command.split(' ');
        let action = commandArr.shift();
        executor[action](commandArr);
    }
}

processComands(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);
