/**
 * Created by Stoyan on 10.7.2017 г..
 */
class HttpRequest {
    constructor (method, uri, version, message, response = undefined, fulfilled = false){
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = response;
        this.fulfilled = fulfilled;
    }
}
let testHttp = new HttpRequest("GET", "https://softuni.bg/trainings/resources/officedocument/16437/lab-problem-descriptions-js-advanced-july-2017",
    "HTTP/1.2", "Hi!");
console.log(testHttp);
