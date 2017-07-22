/**
 * Created by Stoyan on 10.7.2017 г..
 */
function storeTickets(inputArr, sortingCriteria) {
    class Ticket{
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    let store = [];

    for (let line of inputArr){
        let lineArr = line.split('|');
        let destination = lineArr[0];
        let price = lineArr[1];
        let status = lineArr[2];

        let ticket = new Ticket(destination, price, status);

        store.push(ticket);
    }

    if (sortingCriteria === 'destination'){
        store.sort((a, b) => a.destination > b.destination);
    } else if (sortingCriteria === 'price'){
        store.sort((a, b) => a.price > b.price);
    } else if (sortingCriteria === 'status'){
        store.sort((a, b) => a.status > b.status);
    }

    return store;
}

console.log(storeTickets([
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
        'destination'
));

console.log('------------')

console.log(storeTickets(
        ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
        'status'
));