/**
 * Created by Stoyan on 13.7.2017 г..
 */
function forJudje() {

    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, emaila, subject) {
            super(name, emaila);
            this.subject = subject;
        }

        someFunc() {
            return 'same value';
        }

        toString() {
            return super.toString().slice(0, -1) + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            return super.toString().slice(0, -1) + `, course: ${this.course})`;
        }

    }

    return {
        Teacher: Teacher,
        Person: Person,
        Student: Student
    }
}

let funcClass = forJudje();

let person = new funcClass.Person('pesho', 'pesho@abv');
let teacher = new funcClass.Teacher('gosho', 'gosho@abv', 'PHP');
let student = new funcClass.Student('stoyan', 'stoyan@com', 'PHP');

console.log(teacher.email);
console.log(person.name);
console.log('' + person);
console.log('' + teacher);
console.log('' + student);
console.log(teacher.__proto__);
console.log(teacher.__proto__.__proto__);
console.log(funcClass.Teacher.prototype.someFunc);
console.log(funcClass.Teacher.prototype);
