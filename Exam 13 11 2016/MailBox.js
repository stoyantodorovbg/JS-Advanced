/**
 * Created by Stoyan on 22.7.2017 г..
 */
class MailBox {
    constructor() {
        this.mailBox = [];
    }

    addMessage(subject, text) {
        let mail = new Map;
        mail.set(subject,text);
        this.mailBox.push(mail);
        return this;
    }

    get messageCount() {
        return this.mailBox.length;
    }

    deleteAllMessages() {
        this.mailBox = [];
    }

    findBySubject(substr) {
        let findMails = [];
        for (let mail of this.mailBox) {
            let key = [...mail][0][0];
            if (key.indexOf(substr) !== -1) {
               findMails.push(mail);
            }
        }

        let result = [];
        for (let mail of findMails) {
            let subject = [...mail][0][0];
            let text = [...mail][0][1];
            result.push({subject: subject, text: text});
        }

        return result;

    }

    toString() {
        let result = [];
        if (this.mailBox.length === 0) {
            return '* (empty mailbox)';
        } else {
            for (let mail of this.mailBox) {
                result.push(`* [${[...mail][0][0]}] ${[...mail][0][1]}`);
            }
            return result.join('\n');
        }
    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " + JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());
