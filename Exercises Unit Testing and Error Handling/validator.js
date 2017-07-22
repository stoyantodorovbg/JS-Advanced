/**
 * Created by Stoyan on 9.7.2017 г..
 */
function validate(obj) {
    let valid = true;
    if (obj.method !== 'GET' && obj.method !== 'POST' &&
        obj.method !== 'DELETE' && obj.method !== 'CONNECT') {
        valid = false;
        throw new Error('Invalid request header: Invalid Method');
    }
    if (obj.uri !== undefined && obj.ur !== '' && obj.uri !== '*' &&
        !obj.uri.match(/^[A-Za-z0-9.\/-]+$/)) {
        valid = false;
        throw new Error('Invalid request header: Invalid Uri');
    }
    if (obj.version !== 'HTTP/0.9' && obj.version !== 'HTTP/1.0' &&
    obj.version !== 'HTTP/1.1' && obj.version !== 'HTTP/2.0') {
        valid = false;
        throw new Error('Invalid request header: Invalid Version');
    }
    if (obj.method !== undefined && obj.message.match(/[><\\&'"]/)) {
        valid = false;
        throw new Error('Invalid request header: Invalid Message');
    }

    if (valid) {
        return obj;
    }
}

console.log(validate({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''

}));

console.log(validate({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));

console.log(validate({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));

console.log(validate({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}));
