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


function extendClass(baseClass) {
    baseClass.prototype.species = "Human";
    baseClass.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    };
}

extendClass(funcClass.Person);

console.log(person.toSpeciesString());
console.log(teacher.toSpeciesString());
console.log(student.toSpeciesString());

teacher.species = 'TeacherName';
console.log(teacher.toSpeciesString());


