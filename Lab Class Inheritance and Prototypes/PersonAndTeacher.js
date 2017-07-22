/**
 * Created by Stoyan on 13.7.2017 г..
 */
function forJudje() {

    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, emaila, subject) {
            super(name, emaila);
            this.subject = subject;
        }
    }

    return {
        Teacher: Teacher,
        Person: Person
    }
}

let funcClass = forJudje();

let person = new funcClass.Person('pesho', 'pesho@abv');
let teacher = new funcClass.Teacher('gosho', 'gosho@abv', 'PHP');

console.log(teacher.email);
console.log(person.name);

