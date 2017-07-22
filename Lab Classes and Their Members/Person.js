/**
 * Created by Stoyan on 11.7.2017 г..
 */
class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

let testPerson = new Person('Gosho', 'Goshev', 30, 'go6o_go6ef@abv.bg');

console.log(testPerson.toString());