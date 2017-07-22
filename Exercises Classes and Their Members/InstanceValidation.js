/**
 * Created by Stoyan on 12.7.2017 г..
 */
class checkingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }


    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        if (!/^\d{6}$/.test(value)){
            throw new TypeError('Client ID must be a 6-digit number');
        }
        this._clientId = value;
    }
    get email() {
        return this._email;
    }

    set email(value) {
        if (!/^[A-Za-z0-9]+@[A-Za-z0-9.]+$/.test(value)) {
            throw new TypeError('Invalid e-mail');
        }
        this._email = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        if (value.length < 3 || value.length > 10) {
            throw new TypeError('First name must be between 3 and 20 characters long')
        } else if (!/^[A-Za-z]+$/.test(value)) {
            throw new TypeError('First name must contain only Latin characters');
        }
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        if (value.length < 3 || value.length > 10) {
            throw new TypeError('Last name must be between 3 and 20 characters long')
        } else if (!/^[A-Za-z]+$/.test(value)) {
            throw new TypeError('Last name must contain only Latin characters');
        }
        this._lastName = value;
    }
}

let client1 = new checkingAccount(123456, 'Pesho@abv.bg', 'Pesho', 'Goshev');
console.log(client1);
