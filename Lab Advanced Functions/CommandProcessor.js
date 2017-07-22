/**
 * Created by Stoyan on 2.7.2017 г..
 */
function processCommands (commands) {
    let commandProcessor = (function (){
        "use strict";
        let text = '';
        return {
            append: (newtext) => text += newtext,
            removeStart: (count) => text = text.slice(count),
            removeEnd: (count) => text = text.slice(0, text.length - count),
            print: () => console.log(text)
        }

    })();

    for (let cmd of commands) {
        let [cmdName, arg] = cmd.split(' ');
        commandProcessor[cmdName](arg);
    }
}


processCommands(['append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print']
);

